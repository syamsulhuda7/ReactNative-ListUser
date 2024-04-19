/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import Navbar from '../../components/Navbar';

function Profile({navigation}) {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <Navbar />
    </>
  );
}

export default Profile;
