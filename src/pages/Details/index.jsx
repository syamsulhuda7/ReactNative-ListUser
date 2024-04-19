/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from 'react-native';

const Details = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Set filteredUsers pada awalnya sama dengan semua users
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = text => {
    setSearchQuery(text);
    filterUsers(text);
  };

  const filterUsers = query => {
    const filteredData = users.filter(user => {
      return (
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredUsers(filteredData);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    // <ScrollView horizontal={true} vertical={true}>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      style={{flex: 1}}>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={true}
        style={{flex: 1}}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search by name or username"
            onChangeText={handleSearch}
            value={searchQuery}
          />
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={[styles.header, styles.cell, {width: 30}]}>Id</Text>
              <Text style={styles.header}>Name</Text>
              <Text style={styles.header}>Username</Text>
              <Text style={styles.header}>Email</Text>
              <Text style={styles.header}>Address</Text>
              <Text style={styles.header}>Phone</Text>
              <Text style={styles.header}>Website</Text>
              <Text style={styles.header}>Company</Text>
            </View>
            {filteredUsers.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={[styles.cell, {width: 30}]}>{item.id}</Text>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.username}</Text>
                <Text style={styles.cell}>{item.email}</Text>
                <Text style={styles.cell}>{item.address.city}</Text>
                <Text style={styles.cell}>{item.phone}</Text>
                <Text style={styles.cell}>{item.website}</Text>
                <Text style={styles.cell}>{item.company.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  table: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 120,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    width: 120,
  },
});

export default Details;
