import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloProvider } from "@apollo/client";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { client } from "./src/apollo/client";          // <-- import here
import { FavoriteProvider } from "./src/context/FavoriteContext";
import LaunchOverview from "./src/pages/LaunchOverview";
import LaunchDetails  from "./src/pages/LaunchDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>                     {/* <-- wrap here */}
      <FavoriteProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Overview" component={LaunchOverview} />
              <Stack.Screen name="Details"  component={LaunchDetails}  />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </FavoriteProvider>
    </ApolloProvider>
  );
}
