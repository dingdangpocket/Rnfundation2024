/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
const TheoryDescScreen = () => {
    const injectedJs = 'window.alert("参数来自Native:id?10")';
    return (
        <View style={{flex: 1}}>
        </View>
    );
};
const styles = StyleSheet.create({});
export default TheoryDescScreen;
