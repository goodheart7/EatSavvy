import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  Switch,
  SliderIOS,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {
  Icon
} from 'native-base';

import images from '../../image.js'
import styles from './styles';
import Meals from '../Meals';
//import images from '../../../image.js';

export default class MyMainView extends Component {
  constructor(props){
        super(props);
        this.state = {
            markers: [
            {
                key: "1",
                coordinate : {longitude:-0.0694, latitude:51.5344},
                title : "title1",
                description : "description1"
            },
            {
                key: "2",
                coordinate : {longitude:-0.0652, latitude:51.5348},
                title : "title2",
                description : "description2"
            },
            ]
        };
        this.bubbleClick = this.bubbleClick.bind(this);
  }
  bubbleClick = () => {
    this.props.navigator.push({
        component: Meals,
        props: { /* ... */ }
    });
  }
  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <View style={[styles.header, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
            <TouchableOpacity onPress = {this.props.openDrawer} style={styles.menuIcon}>
              <Icon name="menu" style={{color: 'white', fontSize: 40}}/>
            </TouchableOpacity>
            <Image  source={ images.logoWhiteHoriz} style={{margin: 15, width: 200, height: 70, resizeMode: 'contain', marginLeft: 38}}/>
        </View>
        <View style={{flex: 0.85}}>
          <MapView
            style={styles.map}
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
              <MapView.Callout tooltip = {false} onPress= {()=>this.bubbleClick()} underlayColor='#dddddd'/*style={styles.customView}*/>
                
                <View style={{alignItems: 'center', width: 100}}/*style={styles.calloutText}*/>
                    <Text style={{color: 'black'}}>{marker.title}</Text>
                    <Text style={{color: 'black'}}>{marker.description}</Text>
                </View>
                
              </MapView.Callout>
            
            </MapView.Marker>
      
          ))}
          </MapView>
        </View>
      </View>
    )
  }
}



// Shadow props are not supported in React-Native Android apps.
// The below part handles this issue.

// iOS Styles
var iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.75,
  }
});

const iosMinTrTintColor = '#1073ff';
const iosMaxTrTintColor = '#b7b7b7';
const iosThumbTintColor = '#343434';

// Android styles
const androidStyles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
  },
  track: {
    height: 4,
    borderRadius: 4 / 2,
  },
  thumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5,
  }
});

const androidMinTrTintColor = '#26A69A';
const androidMaxTrTintColor = '#d3d3d3';
const androidThumbTintColor = '#009688';


const sliderStyles = (Platform.OS === 'ios') ? iosStyles : androidStyles;
const minimumTrackTintColor = (Platform.OS === 'ios') ? iosMinTrTintColor : androidMinTrTintColor;
const maximumTrackTintColor = (Platform.OS === 'ios') ? iosMaxTrTintColor : androidMaxTrTintColor;
const thumbTintColor = (Platform.OS === 'ios') ? iosThumbTintColor : androidThumbTintColor;
