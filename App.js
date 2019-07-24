import React from 'react';
import{
  Text,
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component{

  constructor(Props){
    super(Props);

    this.state={

    }
  }

  render(){
    return(
      <View style={styles.container}>
      
        <View style={{flexDirection:'row'}}>
       <TouchableOpacity>
         <View style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]}>
         <Icon name="close" style={styles.tilex} />
         </View>
       </TouchableOpacity>


       <TouchableOpacity>
         <View style={[styles.tile,{borderTopWidth:0}]}>
         <Icon name="circle-o" style={styles.tileO} />
         </View>
         </TouchableOpacity>
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
  },
  tilex:{
    color:"red",
    fontSize:60,
    marginLeft:16,
    marginVertical:13
  },
  tileO:{
    color:"green",
    fontSize:60,
    marginLeft:15,
    marginVertical:13
  }
})