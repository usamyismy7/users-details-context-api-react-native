import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import UserDetail from './Components/UserDetail';
import { UserDataContext } from './Components/Context';
import ContextProvider from './Components/Context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const obj = useContext(UserDataContext);
  const info = obj.users;
  
  return(
  <ContextProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} initialParams={{list: info}} 
        options={{tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons style={{ color: focused ? 'white' : 'black' }} name='home-outline' size={24} />
          </View>
        )}} />
        <Tab.Screen name="Profiles" component={Profile} initialParams={{list: info}} 
        options={{tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons style={{ color: focused ? 'white' : 'black' }} name='list-outline' size={24} />
          </View>
        )}} />
        <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{list: info}} 
        options={{tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons style={{ color: focused ? 'white' : 'black' }} name='create-outline' size={24} />
          </View>
        )}} />
        <Tab.Screen name="UserDetail" component={UserDetail} initialParams={{list: info}}      options={{tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons style={{ color: focused ? 'white' : 'black' }} name='person-circle-outline' size={24} />
          </View>
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  </ContextProvider>
  )
}

export function Stacks() {
  <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  </ContextProvider>
}