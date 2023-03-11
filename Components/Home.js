import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserDataContext } from './Context';

//show count of users from context

export default function Home() {
  const obj = useContext(UserDataContext);
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Home</Text>
      <Text style={{color: 'red', fontSize: 18}}><Text style={styles.h3}>Total number of Users: </Text>{obj.users.length}</Text>
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
  h3: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
})