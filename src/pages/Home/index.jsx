/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, Text, View} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default Home;
