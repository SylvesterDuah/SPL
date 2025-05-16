import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { gql, useQuery } from '@apollo/client';


const LAUNCH_QUERY = gql`
  query GetPastLaunches {
    launchesPast(limit: 10, sort: "launch_date_local", order: "desc") {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;


export default function LaunchOverview({ navigation }: any) {
  const { data, loading, error } = useQuery(LAUNCH_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.error("LaunchOverview error:", error);
    return (
      <View style={{ padding: 16 }}>
        <Text style={{ color: "red", marginBottom: 8 }}>Error loading launches:</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }
  

  return (
    <FlatList
      data={data.launchesPast}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { launch: item })}>
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.mission_name}</Text>
            <Text>{new Date(item.launch_date_local).toLocaleDateString()}</Text>
            {item.links.flickr_images[0] && (
              <Image
                source={{ uri: item.links.flickr_images[0] }}
                style={{ width: '100%', height: 200, marginTop: 10 }}
              />
            )}
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
