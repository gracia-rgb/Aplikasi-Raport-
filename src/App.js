import React from 'react';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
