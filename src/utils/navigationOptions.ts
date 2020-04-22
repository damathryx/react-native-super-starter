import { Platform } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import HeaderBackImage from 'components/primitives/HeaderBackImage';

const navigationOptions: NavigationStackOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    height: 70,
    elevation: 0,
  },
  headerTitleStyle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  headerBackImage: HeaderBackImage,
  headerBackTitle: null,
};

export default navigationOptions;
