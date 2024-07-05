/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import RoutesNav from './src/components/RoutesNav';
import {ContextProvider} from './src/context/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <View style={{flex: 1}}>
        {/* {state.safeAreaViewStatus ? (
        <SafeAreaView
          style={{flex: 0, backgroundColor: 'rgba(255,255,255,0.7)'}}
        />
      ) : null} */}
        <RoutesNav />
        {/* {state.safeAreaViewStatus ? (
        <SafeAreaView
          style={{flex: 0, backgroundColor: 'rgba(255,255,255,0.7)'}}
        />
      ) : null} */}
      </View>
    </ContextProvider>
  );
};
export default App;
