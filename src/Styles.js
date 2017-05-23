import { Platform } from 'react-native';

import Metrics from './Metrics';



const Styles = {
  fullScreen: {
    width: Metrics.screenWidth,
    ...Platform.select({
      ios: {
        paddingBottom: 0,
        height: Metrics.screenHeight,
      },
      android: {
        paddingBottom: 0,
        height: Metrics.screenHeight + 24,
      },
    }),
  },
  
};

export default Styles;
