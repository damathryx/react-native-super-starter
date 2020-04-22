declare module '@emotion/native' {
  import css from '@emotion/css';
  import {
    CreateStyled,
    CreateStyledComponentExtrinsic,
  } from '@emotion/styled-base';
  import React, { ComponentType } from 'react';
  import ReactNative from 'react-native';

  type StyledReactNativeComponents = Pick<
    typeof ReactNative,
    | 'ActivityIndicator'
    | 'ART'
    | 'Button'
    | 'DatePickerIOS'
    | 'DrawerLayoutAndroid'
    | 'Image'
    | 'ImageBackground'
    | 'ImageEditor'
    | 'ImageStore'
    | 'KeyboardAvoidingView'
    | 'ListView'
    | 'Modal'
    | 'NavigatorIOS'
    | 'Picker'
    | 'PickerIOS'
    | 'ProgressBarAndroid'
    | 'ProgressViewIOS'
    | 'ScrollView'
    | 'SegmentedControlIOS'
    | 'Slider'
    | 'SnapshotViewIOS'
    | 'Switch'
    | 'RecyclerViewBackedScrollView'
    | 'RefreshControl'
    | 'SafeAreaView'
    | 'StatusBar'
    | 'SwipeableListView'
    | 'SwitchIOS'
    | 'TabBarIOS'
    | 'Text'
    | 'TextInput'
    | 'ToastAndroid'
    | 'ToolbarAndroid'
    | 'TouchableHighlight'
    | 'TouchableNativeFeedback'
    | 'TouchableOpacity'
    | 'TouchableWithoutFeedback'
    | 'View'
    | 'ViewPagerAndroid'
    | 'FlatList'
    | 'SectionList'
  >;

  type ReactNativeStyledComponents<
    Theme extends object = any,
    ExtraProps = {}
  > = {
    [K in keyof StyledReactNativeComponents]: typeof ReactNative[K] extends ComponentType
      ? CreateStyledComponentExtrinsic<typeof ReactNative[K], ExtraProps, Theme>
      : never
  };

  export interface Styled<Theme extends object = any, ExtraProps = {}>
    extends CreateStyled<Theme>,
      ReactNativeStyledComponents<Theme, ExtraProps> {}
  export { css };
  const styled: Styled;
  export default styled;
}
