import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import styles from './styles';
import images from '../../image.js';
import MapView from 'react-native-maps';
import Home from '../Home';
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}
class Order extends Component {

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
            ]
        }
    }

    markerClick() {
      console.log("Marker was clicked");
    }
    confirmClick() {
        this.props.navigator.push({
      		component: Home,
      		props: { /* ... */ }
    	});
    }
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
                <View style={styles.grid}>
                    <View style={styles.grid1}>
                        <Text style={{fontSize: 20, padding: 10, color: 'black', fontFamily: 'Iowan Old Style', fontWeight: 'bold'}}>ORDER SUMMARY</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.grid2}>
                            <Text style={styles.gridtext}>TABOULLAH * 2</Text>
                        </View>
                        <View style={styles.grid3}>
                            <Text style={styles.gridtext}>£9.50</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.grid4}>
                            <Text style={styles.gridtext}>Total</Text>
                        </View>
                        <View style={styles.grid5}>
                            <Text style={styles.gridtext}>£9.50</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.available}>
                    <Text style={styles.av}>available before 18:13 at:</Text>
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
                    <View style={styles.map}>
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
                </View>
                <TouchableWithoutFeedback onPress={() => this.confirmClick()}>
                    <View style={styles.orderbutton}>
                        <Text style={styles.ordertext}>CONFIRM</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default Order;