/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import InterpolateColor from './src/interpolate-color/InterpolateColor';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/** Uncomment below code for PanGesture */}
      {/* <ScrollViewPanGesture /> */}
      {/** Uncomment below code for Interpolate Color */}
      <InterpolateColor />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
