// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import Profile from './src/pages/Profile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'HOME'}} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'DETAILS'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'PROFILE'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
