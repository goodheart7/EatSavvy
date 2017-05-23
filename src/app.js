import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  AppRegistry
} from 'react-native';


import Login from './components/Login';
import Register from './components/Register';
import Setting from './components/Setting';
import Meals from './components/Meals';
import Home from './components/Home';
import Product from './components/Product';

export default class App extends Component {

    constructor(props){
    super(props);
    this.state = {
      page: null
    };
  }

  componentWillMount(){
      this.setState({page: Login});
  }
  render() {
    if (this.state.page) {
      return (
        <Navigator
          initialRoute={{component: this.state.page, title:'login'}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              {/*switch ( route.title ) {
                case 'login':
			    	      return <Login title={route.title} navigator={navigator}/>;
                case 'register':
			    	      return <Register title={route.title} navigator={navigator}/>;
                case 'setting':
			    	      return <Setting title={route.title} navigator={navigator}/>;
                case 'meals':
			    	      return <Meals title={route.title} navigator={navigator}/>;
                case 'home':
			    	      return <Home title={route.title} navigator={navigator}/>;
                case 'product':
                  return <Product title={route.title} navigator={navigator}/>;
                default:
                  return <View style={ { flex: 1 , justifyContent: 'center' , alignItems: 'center' } }>
                            <Text>{`Undefined route: ${route.title}`}</Text>
                         </View>
              }*/}

              if (route.component) {
                return React.createElement(route.component, { navigator, ...route.props });
              }

    return undefined;

        }} /> 
     );
    } else {
      /*return (
        // Our default loading view while waiting to hear back from firebase
        <View >
          <ToolbarAndroid title="RN Firebase Auth" />
          <View >
            <ActivityIndicator size="large" />
          </View>
        </View>
      );*/
    }
  }
}
AppRegistry.registerComponent('App', () => App);