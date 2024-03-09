/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ScrollViewPanGesture from './src/ScrollViewPanGesture/ScrollViewPanGesture';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewPanGesture />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
