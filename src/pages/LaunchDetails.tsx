import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useFavorites } from '../context/FavoriteContext';

export default function LaunchDetails({ route }: any) {
  const { launch } = route.params;
  const { favorites, toggleFavorite } = useFavorites();

  const images = launch.links.flickr_images.slice(0, 3);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{launch.rocket.rocket_name}</Text>
      {images.map((img: string, index: number) => (
        <TouchableOpacity key={index} onPress={() => toggleFavorite(img)}>
          <Image
            source={{ uri: img }}
            style={{
              width: '100%',
              height: 200,
              marginVertical: 10,
              borderWidth: favorites.includes(img) ? 4 : 0,
              borderColor: 'gold',
            }}
          />
        </TouchableOpacity>
      ))}
      {launch.links.article_link && (
        <Text
          style={{ color: 'blue', marginTop: 20 }}
          onPress={() => Linking.openURL(launch.links.article_link)}
        >
          Read Article
        </Text>
      )}
    </View>
  );
}
