import { View, Dimensions, FlatList, StyleSheet, Pressable, TouchableOpacity, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import React, { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const videos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];

const Feed = () => {
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  }

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <Item item={item} shouldPlay={index === currentViewableItemIndex} />
        )}
        keyExtractor={item => item}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
}

const Item = ({ item, shouldPlay }: { shouldPlay: boolean; item: string }) => {
  const video = React.useRef<Video | null>(null);
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    if (!video.current) return;

    if (shouldPlay) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
      video.current.setPositionAsync(0);
    }
  }, [shouldPlay]);

  const customMenus = [
    {
      icon: 'heart',
      value: '1',
      onPress: () => console.log('Liked', item),
    },
    {
      icon: 'chatbubble',
      value: '2',
      onPress: () => console.log('Commented', item),
    },
    {
      icon: 'share-social',
      value: '3',
      onPress: () => console.log('Shared', item),
    },
  ];

  return (
    <View style={styles.videoContainer}>
      <Pressable onPress={() => status?.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()}>
        <Video
          ref={video}
          source={{ uri: item }}
          style={styles.video}
          isLooping
          resizeMode={ResizeMode.COVER}
          useNativeControls={false}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </Pressable>
      <View style={styles.menuContainer}>
        {customMenus.map(menu => (
          <TouchableOpacity key={menu.value} onPress={menu.onPress} style={styles.menuButton}>
            <Ionicons name={menu.icon} size={40} color="white" />
            <Text style={styles.menuText}>{menu.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    alignItems: 'center',
  },
  menuButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Feed;
