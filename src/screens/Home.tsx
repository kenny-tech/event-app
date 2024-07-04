import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Video } from 'expo-av';

const sampleData = [
  { id: 1, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 1' },
  { id: 2, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 1' },
  { id: 3, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 2' },
  { id: 4, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 2' },
  { id: 5, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 3' },
  { id: 6, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 3' },
  { id: 7, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 4' },
  { id: 8, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 4' },
  { id: 9, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 5' },
  { id: 10, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 5' },
  { id: 11, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 6' },
  { id: 12, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 6' },
  { id: 13, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 7' },
  { id: 14, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 7' },
  { id: 15, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 8' },
  { id: 16, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 8' },
  { id: 17, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 9' },
  { id: 18, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 9' },
  { id: 19, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 10' },
  { id: 20, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 10' },
  { id: 21, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 11' },
  { id: 22, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 11' },
  { id: 23, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 12' },
  { id: 24, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 12' },
  { id: 25, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 13' },
  { id: 26, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 13' },
  { id: 27, type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Video 14' },
  { id: 28, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 14' },
  { id: 29, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Video 15' },
  { id: 30, type: 'image', url: 'https://via.placeholder.com/200', title: 'Image 15' },
];

const Home = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newMedia = sampleData.slice((page - 1) * 10, page * 10);
      if (newMedia.length > 0) {
        setMedia(prevMedia => [...prevMedia, ...newMedia]);
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderMediaItem = ({ item }) => {
    if (item.type === 'video') {
      return (
        <View style={styles.mediaContainer}>
          <Video
            source={{ uri: item.url }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            useNativeControls
            style={styles.media}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    } else if (item.type === 'image') {
      return (
        <View style={styles.mediaContainer}>
          <Image
            source={{ uri: item.url }}
            style={styles.media}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={media}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMediaItem}
        onEndReached={fetchMedia}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mediaContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  media: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default Home;
