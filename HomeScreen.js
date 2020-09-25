import *as React from 'react';
import { View, Text ,Button} from 'react-native';

const HomeScreen=({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>HomeScreen</Text>
        <Button
        title="Profile"
        onPress={()=>navigation.navigate('Profile')}>
        </Button>
        <Button
        title="Details"
        onPress={()=>navigation.navigate('Details')}>
        </Button>
      </View>
    )
  }
  export default HomeScreen;