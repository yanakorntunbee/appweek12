import *as React from 'react';
import { View, Text ,Button} from 'react-native';

const ProfileScreen=({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Profile</Text>
        <Button
        title="go Back"
        onPress={()=>navigation.goBack()}>
        </Button>
      </View>
    )
  }
  export default ProfileScreen;