/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ColorPickerContainer from './src/color-picker/ColorPickerContainer';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/** Uncomment below code for PanGesture */}
      {/* <ScrollViewPanGesture /> */}
      {/** Uncomment below code for Interpolate Color */}
      {/* <InterpolateColor /> */}
      {/** Uncomment below code for Color Picker */}
      <ColorPickerContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
