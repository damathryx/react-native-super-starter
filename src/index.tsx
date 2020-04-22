import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';

import { store, persistor } from 'store';
import theme from 'theme';

import Screens from 'screens';

const Root = () => {
  const [rehydrated, setRehydrated] = useState(false);

  const onRehydate = async () => {
    setRehydrated(true);
    SplashScreen.hide();
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor(onRehydate)}>
        <ThemeProvider theme={theme}>
          <Screens />
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Root;
