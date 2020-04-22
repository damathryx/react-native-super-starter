import React from 'react';

import { BackArrow } from 'components/primitives/SVG';
import useTheme from 'utils/Hooks/useTheme';
import { TAB_GROUPS } from 'screens/Main';

import { Container, Tab, Title } from './BottomTabBar.style';
import { BottomTabBarPassedProps, RouteProps } from './BottomTabBar.props';

const Labels = () => ({
  [TAB_GROUPS.GROUP1]: 'Tab 1',
  [TAB_GROUPS.GROUP2]: 'Tab 2',
  [TAB_GROUPS.GROUP3]: 'Tab 3',
});

const Icon = () => ({
  [TAB_GROUPS.GROUP1]: BackArrow,
  [TAB_GROUPS.GROUP2]: BackArrow,
  [TAB_GROUPS.GROUP3]: BackArrow,
});

const BottomTabBar = ({ navigation }: BottomTabBarPassedProps) => {
  const theme = useTheme();
  const tabs = navigation.state.routes.map(
    (data: RouteProps, index: number) => {
      const isFocused = index === navigation.state.index;
      const IconComponent = Icon()[data.key];
      return (
        <Tab key={data.key} onPress={() => navigation.navigate(data.key)}>
          <IconComponent
            fill={isFocused ? theme.brand.alt : theme.brand.default}
          />
          <Title color={isFocused ? theme.brand.alt : theme.brand.default}>
            {Labels()[data.key]}
          </Title>
        </Tab>
      );
    },
  );
  return <Container>{tabs}</Container>;
};

export default BottomTabBar;
