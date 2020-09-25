import *as React from 'react';
import { View, Text ,Button} from 'react-native';

const DetailsScreen=({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>DetailsScreen</Text>
        <Button
        title="go back"
        onPress={()=>navigation.goBack()}>
        </Button>
      </View>
    )
  }
  export default DetailsScreen;