import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Tracks from '../screens/Tracks';
import {asyncGetData, asyncSetData} from '../common/Utils';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Programs screen'}}
      />
      <Stack.Screen
        name="Tracks"
        component={Tracks}
        options={{title: 'Tracks screen'}}
      />
    </Stack.Navigator>
  );
};

function Router() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default Router;
