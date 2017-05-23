import React, { Component } from 'react';
import {
    TouchableHighlight,
    SwitchIOS,
    View,
    Text,
    TouchableOpacity,
    Navigator,
    Image,
} from 'react-native';

import { Container, Form, Item, Label, Button } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import Styles from '../../Styles.js';
import styles from './styles';
import Colors from '../../Colors.js';
import Modal from 'react-native-simple-modal';
import Login from '../Login';
import Order from '../Order';
import images from '../../image.js'
export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
        open: false,
    }
    this.onPressYes = this.onPressYes.bind(this);
  }

  onPressNo = () => {
      this.setState({
          open: false,
      })
  }

  onPressYes = () => {
      
      this.props.navigator.push({
        component: Login,  
        });
  }

  orderClick = () => {
      this.props.navigator.push({
        component: Order,  
        });
  }

  render() {
    return (
      <View style={styles.controlPanel}>
          <View style={{flexDirection: 'row'}}>
              <Image source={images.logoGreenHoriz} style={{marginLeft: 32, marginTop: 25, width:220, height:100, resizeMode:'contain'}}/>
              <TouchableOpacity style={{marginTop: 50}} onPress = {this.props.closeDrawer}>
                <Icon
                    name="close-o" 
                    size={50}
                    style={{marginLeft: 80}}
                    />
              </TouchableOpacity>
          </View>
          
          <Text onPress={()=>this.orderClick()} style={{marginLeft: 35, fontFamily: 'Iowan Old Style', textDecorationLine: 'underline', fontSize: 40, color:'black', padding: 5}}>Orders</Text>
          <Text style={{marginLeft: 35, fontFamily: 'Iowan Old Style', textDecorationLine: 'underline', fontSize: 40, marginTop: 20, color:'black'}}>Settings</Text>
          <Text onPress={()=>this.setState({open: true})} style={{marginLeft: 35, fontFamily: 'Iowan Old Style', textDecorationLine: 'underline', fontSize: 40, marginTop: 20, color:'black'}}>Logout</Text>
          
          <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => this.setState({open: false})}
            style={{alignItems: 'center', width: 100, height: 50}}>
            <Text style={{textAlign:'center', marginTop: 10, fontSize: 15}}>Are you sure you want to log out?</Text>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Button block success onPress={this.onPressNo} style={{width: 50, height: 35, marginLeft: 20, marginTop: 5, flex: 1}}>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>No</Text>
            </Button>
            <Button block success onPress={this.onPressYes} style={{width: 50, height: 35, marginLeft: 20, marginTop: 5, flex: 1, marginRight:20}}>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Yes</Text>
            </Button>
            </View>   
          </Modal>
      </View>
    )
  }
}
