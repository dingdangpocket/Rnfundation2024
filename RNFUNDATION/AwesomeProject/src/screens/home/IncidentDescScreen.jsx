/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const IncidentDescScreen = () => {
  return <View style={{flex: 1}}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default IncidentDescScreen;
