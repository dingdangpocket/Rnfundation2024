/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const IncidentDescScreen = () => {
   
    // useEffect(() => {
    //   const listener = rotationValue.addListener(({ value }) => {
    //     setLastRotationValue(value);
    //   });

    //   return () => {
    //     rotationValue.removeListener(listener);
    //   };
    // }, [rotationValue]);
    return (
        <View style={{flex: 1}}>
            <Text style={{fontSize: 25}}>音乐🎵...加载中...请稍后...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
});

export default IncidentDescScreen;
