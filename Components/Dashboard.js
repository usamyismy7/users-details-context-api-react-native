import React, { useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { UserDataContext } from './Context';

export default function Dashboard({navigation}) {
  const obj = useContext(UserDataContext);
  const newObject = {
    id: 12191,
    displayName: 'New User',
    profileImage: require('../assets/images/a.png'),
    bio: 'Lives in Wah, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
    email: 'newuser@gmail.com'
  };
  function addUser() {
    obj.addNewUser(newObject);
    navigation.navigate('Profiles');
  }
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Dashboard</Text>
      <Text>Press the button to add a new user to the list</Text>
      <Pressable style={styles.button} onPress={() => addUser()}>Add User</Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 20,
    color: 'skyblue',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    color: 'whitesmoke',
    marginVertical: 20,
    padding: 15,
  },
})