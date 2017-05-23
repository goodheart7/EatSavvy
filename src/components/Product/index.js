import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Container, Header, Title, Form, InputGroup, Input, Item, Label, Button, Spinner } from 'native-base';
import images from '../../image.js';
import Styles from '../../Styles.js';
import styles from './styles';
import Colors from '../../Colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Metrics from '../../Metrics.js'
import Order from '../Order';
import Modal from 'react-native-simple-modal';
class Product extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: 0,
            time: '',
            open: false
        }
    }
	
    _onBack = () => {
        this.props.navigator.pop();
    }

    onPressOrder = () => {
        this.setState({name: this.props.name, time: this.props.time, price: this.props.price});
        this.props.navigator.push({
            component: Order,
            props: {
                /* ... */
            },
        });
    }

     onPressNo = () => {
        this.setState({
            open: false,
        })
     }
     onPressYes = () => {
        this.setState({
            open: false,
        })
        this.onPressOrder()
     }
	render() {
		return (
            <View style={styles.wrapper}> 
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this._onBack()}>
                        <Image source={images.left} style={styles.left}/>
                    </TouchableOpacity>
                    <Image source={images.logoDarkHoriz} style={styles.logo}/>
                </View>
                <View style={styles.subheaderproduct}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.subhalfone}>
                            <Text style={styles.pitapan}>PITA PAN</Text>
                        </View>
                        <View style={styles.subhalftwo}>
                            <Image source={images.thumb}/>
                            <Text style={styles.percent}>76%</Text>
                        </View>
                    </View>
                    
                    <Image source={images.t2} style={styles.t2}/>
                    
                </View>
               
                <View style={styles.textboxproduct}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.time}>{this.props.amount} remaining </Text>
                    <Text style={styles.time}>before {this.props.time}</Text>
                    <Text style={styles.price}>£{this.props.price}</Text>
                </View>
                <TouchableWithoutFeedback onPress={()=>this.setState({open: true})}>
                    <View style={styles.orderbutton}>
                        <Text style={styles.ordertext}>ORDER</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Modal
                    offset={this.state.offset}
                    open={this.state.open}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({open: false})}
                    style={{alignItems: 'center', width: 100, height: 50}}>
                    <Text style={{textAlign:'center', marginTop: 10, fontSize: 15}}>{this.props.amount} meals available. How many do you want?</Text>
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
		);
	}
}

export default Product;
