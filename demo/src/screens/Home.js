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
import {GET_PROGRAMS} from '../redux/saga/actionTypes/home';

function Home({navigation}) {
  const [programData, setProgramData] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
        dispatch({type: GET_PROGRAMS, payload: {}});
  }, []);

   useEffect(() => {
     if(state.home.programsList && state.home.programsList.programs){
      setProgramData(state.home.programsList.programs);
     }
  }, [state.home&&state.home.programsList]);

  const ProgramClick = (item) => {
    navigation.navigate('Tracks', {'TrackData': item.tracks});
  };

  const Item = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress = {() => ProgramClick(item)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.programsContainer}>
        <FlatList
          data={programData}
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
    backgroundColor: '#26A69A',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
  programsContainer: {
    flex: 1,
  },
});

export default Home;
