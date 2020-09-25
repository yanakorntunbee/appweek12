import *as React from 'react'; 

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
      

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title:'Youtube',
          headerStyle:{
            backgroundColor:'red',
          },
            headerTintColor:'#fff',
        }} 
        />
        <Stack.Screen name="Details" component={DetailsScreen}
        options={{
          title:'Instagram',
          headerStyle:{
            backgroundColor:'skyblue',
          },
            headerTintColor:'#fff',
        }} 
        />
        <Stack.Screen name="Profile" component={ProfileScreen}
        options={{
          title:'Whatapp',
          headerStyle:{
            backgroundColor:'pink',
          },
            headerTintColor:'#fff',
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
