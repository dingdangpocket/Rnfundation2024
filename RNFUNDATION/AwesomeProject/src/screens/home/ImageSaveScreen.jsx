/* eslint-disable eqeqeq */
/* eslint-disable curly */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
const ImageSaveScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>保存图片</Text>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2FF345CC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  app: {
    backgroundColor: '#11131B',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerText: {
    marginTop: 50,
    fontSize: 26,
    color: 'white',
  },
  textInputWrapper: {
    marginTop: 30,
    alignSelf: 'stretch',
    padding: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 3,
  },
  imagePreview: {
    height: 300,
    width: 300,
    backgroundColor: 'purple',
    marginTop: 30,
  },
  downloadButton: {
    backgroundColor: 'white',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 3,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default ImageSaveScreen;
