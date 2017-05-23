import { StyleSheet, PixelRatio } from 'react-native';
const deviceScreen = require('Dimensions').get('window')

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '13%'
    },
    map: {
        flex: 1,
    },

    marker: {
        backgroundColor: "#550bbc",
        padding: 5,
        borderRadius: 5,
    },

    text: {
        fontSize: 30,
        marginLeft: deviceScreen.width * 0.3
    },

    calloutText: {

    },

    menuIcon: {
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 20,
        marginRight: 20
    },

    scrollView: {
        backgroundColor: '#B99BC4',
    },

    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#C5B9C9',
    },
    controlPanel: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    controlPanelText: {
        color:'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
    },
    controlPanelWelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
        color:'white',
        fontWeight:'bold',
    },
    categoryLabel: {
        fontSize: 15,
        textAlign: 'left',
        left: 10,
        padding:10,
        fontWeight:'bold',
    },
    row: {
        flexDirection: 'row',
        borderRadius: 0,
        borderWidth: 0,
        padding:0,
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        padding:10,
        alignItems: 'center'
    },
    lastRow: {
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius: 0,
        borderWidth: 0,
        padding:0,
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        padding:10,
        alignItems: 'center'
    },

    rowInput: {
        right:10,
    },
    sliderMetric: {
        right:10,
        width:30,
    },
    slider: {
        width: 150,
        height: 30,
        margin: 10,
    },
    picker: {
        backgroundColor:'white',
        borderRadius: 0,
        borderWidth: 0,
        padding:0,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
    },
    label: {
        fontSize: 20,
        textAlign: 'left',
        margin: 0,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderColor: '#eeeeee',
        borderWidth:1,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#aaaaaa',
        marginRight:20,
        marginLeft:20,
        alignSelf: 'center',
    },
    
});