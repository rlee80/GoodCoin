import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import ItemList from "../components/itemList";
import { Icon } from 'react-native-elements';
import { Value } from 'react-native-reanimated';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};
const tokenValues = [10,20,50,100,200,500,1000,2000,5000]

export default class Home extends React.Component  {
  state = {
    fontsLoaded: false,
    name: 'Ebtesam',
    food: false,
    accomodation:false,
    services: false,
    supplies: false,
    token: 0,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
   
  }

  
  _setState(category){
    
  }
  

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      
      <View style={styles.home}>
    
   
      </View>
      <Text style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH'}}>Home                                              <Icon  name='heart' type='font-awesome' color='#fff'></Icon> <Icon  name='history' color='#fff'></Icon></Text>
      <Text style={{position:'relative',fontSize:30,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Welcome,<Text style={{fontFamily:'FuturaH', color:'#c0a188'}}> {this.state.name}</Text></Text>
      <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Select a few categories to help a person in need</Text>
    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
    <Text style={styles.categories} onPress={()=>{this.setState({food:!this.state.food})}}>Food {"\n"} {this.state.food && <Icon name='check-circle' size={30}></Icon>} </Text> 
        <Text style={styles.categories} onPress={()=>{this.setState({accomodation:!this.state.accomodation})}}>Accomodation {this.state.accomodation && <Icon name='check-circle' size={30}></Icon>}</Text>
        <Text style={styles.categories} onPress={()=>{this.setState({services:!this.state.services})}}>Services {"\n"} {this.state.services && <Icon name='check-circle' size={30}></Icon>}</Text>
        <Text style={styles.categories} onPress={()=>{this.setState({supplies:!this.state.supplies})}}>Supplies {"\n"} {this.state.supplies && <Icon name='check-circle' size={30}></Icon>}</Text>
       </View>
       <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Select token value</Text>
      
       <FlatList style={{height:10, marginBottom:10}}
                horizontal
                data={tokenValues}
                renderItem={({ item }) =>  <Text style={styles.token} onPress={()=>this.setState({token:item})}>{item}</Text>
                    
                    
                }
            />
            <View style={{height:200, elevation:1, borderRadius:20, backgroundColor:'#0A0A0A', borderColor:'#c0a188', borderWidth:1, marginBottom:'2.5%'}}>
            <ScrollView>
     <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH'}}>Goodcoin Selection Summary</Text>
              <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Categories{"\n"}----------------------------------------------</Text>
    {this.state.food && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Food</Text>}
    {this.state.accomodation && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Accomodation</Text>}
    {this.state.services && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Services</Text>}
    {this.state.supplies && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Supplies</Text>}
    <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Amount{"\n"}----------------------------------------------</Text>
    <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginBottom:'10%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>${this.state.token}</Text>
    </ScrollView></View>
    <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#000', fontFamily:'FuturaH', marginBottom:'5%', backgroundColor:'#FFF', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:5,borderColor:'#c0a188', borderWidth:1,}} onPress={()=>this.props.navigation.navigate('Token')} >Generate Token</Text>
    
     
      
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#000'
  },
  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  categories:{
    fontFamily:'FuturaH', 
    fontSize:15,
    paddingVertical:'5%', 
    paddingHorizontal:'10%',
    backgroundColor:'#c0a188', 
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    width:'46.5%',
    marginHorizontal:'1.5%',
    marginVertical:'1.5%',
  },
  token:{
    fontFamily:'FuturaH', 
    fontSize:20,
    backgroundColor:'#c0a188', 
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    width:100,
    height:100,
    marginRight:10,

  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
 

});