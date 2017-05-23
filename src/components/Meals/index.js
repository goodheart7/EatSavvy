import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Container, Header, Title, Form, InputGroup, Input, Item, Label, Button, Spinner } from 'native-base';
import SudokuGrid from 'react-native-smart-sudoku-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import images from '../../image.js';
import Styles from '../../Styles.js';
import styles from './styles';
import Colors from '../../Colors.js';
import Metrics from '../../Metrics.js'
import Product from '../Product';
import MapView from 'react-native-maps';
const dataList = [
    {
        name: 'TABBOULEH',
        amount: 5,
        time: "18:00",
        price: 4.75
    }, 
    {
        name: 'FATTOUSH',
        amount: 7,
        time: "17:45",
        price: 3.35
    }, 
    {
        name: 'FREEUEH',
        amount: 2,
        time: "18:25",
        price: 5.25
    },
];

class Meals extends Component {

    constructor(props){
        super(props);
        this.onClickCell = this.onClickCell.bind(this);
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            viewRef: 0,
            mealsList: dataList,
            markers: [
                {
                    key: "1",
                    coordinate : {longitude:-0.0694, latitude:51.5344},
                    title : "title1",
                    description : "description1"
                },
            ]
            
        };
    }
	
    onClickCell = (data,index) => {
         this.props.navigator.push({
            component: Product,
            props: {
                name: data.name,
                amount: data.amount,
                time: data.time,
                price: data.price,
            },
        });
    }
    
     _renderGridCell = (data, index) => (
        <View>
            <TouchableOpacity onPress={this.onClickCell.bind(this, data, index) }>
                <View style={styles.box}>
                    <View style={styles.imagebox}>
                        <Image source={images.tab}/>
                    </View>
                    <View style={styles.textbox}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.time}>{data.amount} remaining</Text>        
                        <Text style={styles.time}>before {data.time}</Text>
                        <Text style={styles.price}>£{data.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
     )

     _onBack = () => {
        this.props.navigator.pop();
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
                <View style={styles.subheader}>
                    <Text style={styles.pitapan}>PITA PAN</Text>
                    <MapView
                        style={{flex: 1}}
                        initialRegion={{
                            latitude: 51.5344,
                            longitude: -0.0694,
                            latitudeDelta: 0.0222,
                            longitudeDelta: 0.0201,
                        }}
                        >
                        
                        {this.state.markers.map((marker) => (
                        <MapView.Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.description}>
                            <Image source={images.marker} />
                            <MapView.Callout tooltip = {false} /*onPress= {()=>this.bubbleClick()}*/ underlayColor='#dddddd'/*style={styles.customView}*/>
                            
                            <View style={{alignItems: 'center', width: 100}}/*style={styles.calloutText}*/>
                                <Text style={{color: 'black'}}>{marker.title}</Text>
                                <Text style={{color: 'black'}}>{marker.description}</Text>
                            </View>
                            
                            </MapView.Callout>
                        
                        </MapView.Marker>
                    
                        ))}
                    </MapView>
                </View>
                <ScrollView>
                   <SudokuGrid
                        columnCount={1}
                        dataSource={this.state.mealsList}
                        renderCell={this._renderGridCell}
                    />
                </ScrollView>
            </View>
		);
	}
}

export default Meals;
