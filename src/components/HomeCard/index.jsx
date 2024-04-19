/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeCard = ({users, setId, setPopUp}) => {

  const handlePress = id => {
    setId(id);
    setPopUp(true);
    console.log('ok');
  };

  return (
    <>
      <ScrollView>
        <Text style={styles.title}>User List :</Text>
        {users.map((user, i) => (
          <TouchableOpacity
            style={styles.card}
            key={i}
            onPress={() => handlePress(user.id)}>
            <Text style={styles.title}>
              {i + 1}. {user.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 280,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: '#333',
  },
});

export default HomeCard;
