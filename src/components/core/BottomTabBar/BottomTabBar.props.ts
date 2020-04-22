import { NavigationRoute } from 'react-navigation';
import { NavigationTabProp } from 'react-navigation-tabs';

export type BottomTabBarPassedProps = {
  navigation: NavigationTabProp<NavigationRoute>;
};

export type RouteProps = NavigationRoute;
