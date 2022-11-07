import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Gallery',
    },
  },
);

export default createAppContainer(navigator);
