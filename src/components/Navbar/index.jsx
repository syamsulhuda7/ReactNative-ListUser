/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };

  const navigateToDetailsPage = () => {
    navigation.navigate('Details');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHomePage}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToDetailsPage}>
        <Text style={styles.link}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToProfile}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Navbar;
