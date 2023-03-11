import React, { useContext } from 'react';
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native';
import { UserDataContext } from './Context';

export default function Profile({navigation, route}) {
  const obj = useContext(UserDataContext);
  const infoList = obj.users;
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Profiles</Text>
      <ScrollView>
      {infoList.map((item, index) => {
        return(
          <Pressable onPress={()=>navigation.navigate("UserDetail", {person: index})}>
          <View style={styles.person}>
            <View style={styles.image}>
              <Image source={item.profileImage} style={{width: 100, height: 100}} />
            </View>
            <View>
              <Text style={styles.text}>{item.displayName}</Text>
              <Text style={styles.text}>{item.email}</Text>
            </View>
          </View>
        </Pressable>
        )
      })}
      </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
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
  person: {
    flexDirection: 'row',
    backgroundColor: 'silver',
    marginVertical: 10,
    paddingVertical: 10,
  },
  image: {
    marginHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
})