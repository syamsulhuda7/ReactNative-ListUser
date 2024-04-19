/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Text, View, ActivityIndicator} from 'react-native';
import Navbar from '../../components/Navbar';
import HomeCard from '../../components/HomeCard';
import HomePopupCard from '../../components/HomePopUpCard';

function Home({navigation}) {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [id, setId] = React.useState('');
  const [popUP, setPopUp] = React.useState(false);

  React.useEffect(() => {
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {return <ActivityIndicator size="large" color="#0000ff" />;}
  if (error) {return <Text>Error: {error}</Text>;}

  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <HomeCard users={users} setPopUp={setPopUp} setId={setId}/>
        {popUP && <HomePopupCard sendId={id} setPopUp={setPopUp}/>
}
      </View>
      <Navbar />
    </>
  );
}

export default Home;
