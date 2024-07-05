/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
const ImagePicker = () => {
  return (
    <View>
      <Text>访问相册</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  outSideView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  openButton: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: 'white',
  },
  buttonTitle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});
export default ImagePicker;
