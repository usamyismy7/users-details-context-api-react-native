import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { UserDataContext } from './Context';

export default function UserDetail({navigation, route}) {
  const obj = useContext(UserDataContext);
  const index = route.params.person;
  function firstProfile() {
    if(index==null)
      return 0
    else
      return index
  }
  function remove() {
    obj.removeUser(index);
    navigation.navigate('Home');
  }
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>User Details</Text>
      <Image source={obj.users[firstProfile()].profileImage} style={{width: 100, height: 100}} />
      <View style={styles.text}>
        <Text><Text style={{fontWeight: 'bold'}}>Id: </Text>{obj.users[firstProfile()].id}</Text>
        <Text><Text style={{fontWeight: 'bold'}}>Name: </Text>{obj.users[firstProfile()].displayName}</Text>
        <Text><Text style={{fontWeight: 'bold'}}>Email: </Text>{obj.users[firstProfile()].email}</Text>
        <Text><Text style={{fontWeight: 'bold'}}>Bio: </Text>{obj.users[firstProfile()].bio}</Text>
        <Pressable style={styles.button} onPress={()=>remove()}>
          Remove User
        </Pressable>
      </View>
      <View>
        
      </View>
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
  text: {
    alignItems: 'start',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  button: {
    fontSize: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    color: 'whitesmoke',
    marginVertical: 20,
    padding: 15,
    alignSelf: 'center',
  },
})