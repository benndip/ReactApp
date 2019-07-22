import React from 'react';
import{
  Text,
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.text}>
        <Text>Welcome To Benndip's Tic-Tac-Toe</Text>
        </View>
        
        <View style={{flexDirection:'row'}}>
       <TouchableOpacity><View style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]}></View></TouchableOpacity>
       <TouchableOpacity><View style={[styles.tile,{borderTopWidth:0}]}></View></TouchableOpacity>
       <TouchableOpacity><View style={[styles.tile,{borderRightWidth:0,borderTopWidth:0}]}></View></TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity><View style={[styles.tile,{borderLeftWidth:0}]}></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.tile}></View></TouchableOpacity>
        <TouchableOpacity><View style={[styles.tile,{borderRightWidth:0}]}></View></TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity><View style={[styles.tile,{borderLeftWidth:0,borderBottomWidth:0}]}></View></TouchableOpacity>
        <TouchableOpacity><View style={[styles.tile,{borderBottomWidth:0}]}></View></TouchableOpacity>
        <TouchableOpacity><View style={[styles.tile,{borderRightWidth:0,borderBottomWidth:0}]}></View></TouchableOpacity>
        </View>
      </View>
      );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'indigo',
    justifyContent:'center',
    alignItems:'center'
  },
  tile:{
    width:100,
    height:100,
    borderWidth:9,
    borderColor:'white'
  },
  text:{
  backgroundColor:'aquamarine',
 marginVertical:20,
 paddingTop:10
  }
})