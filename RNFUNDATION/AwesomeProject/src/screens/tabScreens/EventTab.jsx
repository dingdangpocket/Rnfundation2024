/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
const EventTab = () => {
  return (
    <View style={styles.container}>
      <Text>EventTab</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
export default EventTab;
