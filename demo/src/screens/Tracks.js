import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SoundPlayer from 'react-native-sound-player'

function Tracks({route,navigation}) {
  const { TrackData } = route.params;
  let _onFinishedLoadingURLSubscription;

  useEffect(() => {
    _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
    });
    return () => {
      //on unmount stop track and remove url loading listener
      SoundPlayer.stop();
      _onFinishedLoadingURLSubscription.remove();
    }
  }, []);

  const PlayClick = (item) => {
      try {
        if (item.media && item.media.mp3 && item.media.mp3.url) {
          SoundPlayer.loadUrl(item.media.mp3.url);
          SoundPlayer.play();
        }
      } catch (e) {
        console.log(`cannot play the sound file`, e)
    }
  };

  const ResumeClick = (item) => {
    try {
      SoundPlayer.resume();
    } catch (e) {
      console.log(`error resume`, e)
    }
  }

  const PauseClick = (item) => {
    try {
        SoundPlayer.pause();
    } catch (e) {
      console.log(`error pause`, e)
  }
};

  const Item = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.play}>
          <TouchableOpacity
            onPress = {() => PlayClick(item)}>
            <Text style={styles.title}>PLAY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pause}>
        <TouchableOpacity
          onPress = {() => PauseClick(item)}>
          <Text style={styles.title}>PAUSE</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.resume}>
        <TouchableOpacity
          onPress = {() => ResumeClick(item)}>
          <Text style={styles.title}>RESUME</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tracksContainer}>
        <FlatList
          data={TrackData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
  tracksContainer: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  play: {
    flex:1,
  },
  pause: {
    flex:1,
  },
  resume: {
    flex:1,
  }
});

export default Tracks;
