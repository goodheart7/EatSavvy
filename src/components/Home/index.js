import React, { Component } from 'react';
import {
    MapView,
    View,
    Text,
    TouchableHighlight,
    Image
} from 'react-native';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}
import styles from './styles';
import Drawer from 'react-native-drawer';
import Mymenu from './menu';
import MyMainView from './main';
import Metrics from '../../Metrics.js'
class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            drawerType: 'overlay',
            openDrawerOffset: 0,
            closedDrawerOffset:0,
            panOpenMask: .1,
            //panCloseMask: .9,
            relativeDrag: false,
            panThreshold: .25,
            tweenHandlerOn: false,
            tweenDuration: 350,
            tweenEasing: 'linear',
            disabled: false,
            tweenHandlerPreset: null,
            acceptDoubleTap: false,
            acceptTap: false,
            acceptPan: true,
            tapToClose: false,
            negotiatePan: false,
            rightSide: false,
        }
        this.markerClick = this.markerClick.bind(this);
    }

    markerClick = () => {
        this.props.navigator.push({
            component: Meals,
            props: { /* ... */ }
        });
    }

    setDrawerType(type){
    this.setState({
      drawerType: type
    })

  }

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer(){
    this.drawer.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

    render() {
        var menu = <Mymenu closeDrawer={() => {
            this.drawer.close();
        }} navigator={this.props.navigator} />
        return (
            <Drawer
                ref={c => this.drawer = c}
                type={this.state.drawerType}
                animation={this.state.animation}
                openDrawerOffset={this.state.openDrawerOffset}
                closedDrawerOffset={this.state.closedDrawerOffset}
                panOpenMask={this.state.panOpenMask}
                panCloseMask={this.state.panCloseMask}
                relativeDrag={this.state.relativeDrag}
                panThreshold={this.state.panThreshold}
                content={menu}
                styles={drawerStyles}
                disabled={this.state.disabled}
                tweenHandler={this.tweenHandler.bind(this)}
                tweenDuration={this.state.tweenDuration}
                tweenEasing={this.state.tweenEasing}
                acceptDoubleTap={this.state.acceptDoubleTap}
                acceptTap={this.state.acceptTap}
                acceptPan={this.state.acceptPan}
                tapToClose={this.state.tapToClose}
                negotiatePan={this.state.negotiatePan}
                changeVal={this.state.changeVal}
                side={this.state.rightSide ? 'right' : 'left'}
            >
            
            <MyMainView
                navigator={this.props.navigator}
                drawerType={this.state.drawerType}
                setParentState={this.setStateFrag.bind(this)}
                openDrawer={this.openDrawer.bind(this)}
                openDrawerOffset={this.state.openDrawerOffset}
                closedDrawerOffset={this.state.closedDrawerOffset}
                panOpenMask={this.state.panOpenMask}
                panCloseMask={this.state.panCloseMask}
                relativeDrag= {this.state.relativeDrag}
                panStartCompensation= {this.state.panStartCompensation}
                tweenHandlerOn={this.state.tweenHandlerOn}
                disabled={this.state.disabled}
                panThreshold={this.state.panThreshold}
                tweenEasing={this.state.tweenEasing}
                tweenHandlerPreset={this.state.tweenHandlerPreset}
                animation={this.state.animation}
                noopChange={this.noopChange.bind(this)}
                acceptTap={this.state.acceptTap}
                acceptDoubleTap={this.state.acceptDoubleTap}
                acceptPan={this.state.acceptPan}
                tapToClose={this.state.tapToClose}
                negotiatePan={this.state.negotiatePan}
                rightSide={this.state.rightSide}
            />
            </Drawer>          
        );
    }
}

export default Home;