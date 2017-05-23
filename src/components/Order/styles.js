import { StyleSheet, PixelRatio } from 'react-native';
const deviceScreen = require('Dimensions').get('window');
import Metrics from '../../../src/Metrics.js'

export default StyleSheet.create({
    wrapper: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
    },
    header: {
      width: Metrics.screenWidth,
      height: 80,
      flexDirection: 'row',
    },
    left: {
      margin: 28
    },
    logo: {
      width: 113,
      height: 90,
      resizeMode: 'contain',
      marginLeft: 66
    },
    gridtext: {
        fontSize: 18, 
        padding: 10, 
        color: 'black',
        fontFamily: 'Iowan Old Style',
        fontWeight: 'bold',
    },
    grid: {
        marginTop: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    grid1: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 306,
	    height: 53,
        borderWidth: 2, 
        borderColor: 'black',
        padding: 10
    },
    grid2: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 202,
	    height: 53,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2, 
        borderColor: 'black',
        padding: 13
    },
    grid3: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 104, 
        height: 53, 
        borderRightWidth: 2,
        borderBottomWidth: 2,  
        borderColor: 'black',
        padding: 13
    },
    grid4: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 202, 
        height: 53, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,  
        borderColor: 'black',
        paddingTop: 13,
        paddingBottom: 17
    },
    grid5: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 104, 
        height: 53, 
        borderRightWidth: 2,
        borderBottomWidth: 2,  
        borderColor: 'black',
        paddingTop: 13,
        paddingBottom: 17
    },
    available: {
        width: 400,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 17
    },
    av: {
        margin: 0,
        padding: 0,
        fontSize: 18,
        fontFamily: 'Iowan Old Style',
        fontWeight: 'bold'
    },
    subheaderproduct: {
      width: '100%',
      height: 260,
      backgroundColor: '#6edb7c',
      marginBottom: 16,
    },
    subhalfone: {
      width: 200,
	    height: 60,
      flexDirection: 'row'
    },
    subhalftwo: {
      flexDirection: 'row',
      padding: 17,
      marginLeft: 100
    },
     pitapan: {
      color: '#fff',
      textAlign: 'left',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 26,
      marginTop: 17,
      marginLeft: 43
    },
    percent: {
      color: '#fff',
      textAlign: 'right',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 3,
      marginLeft: 8
    },
    map: {
        flex: 1,
    },
    orderbutton: {
      width: 366,
      height: 60,
      marginLeft: 17,
      marginTop: 20,
      backgroundColor: '#6edb7c',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ordertext: {
      color: '#fff',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 26,
    },
});