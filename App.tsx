/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ColorPickerContainer from './src/color-picker/ColorPickerContainer';
import ScrollViewPanGesture from './src/ScrollViewPanGesture/ScrollViewPanGesture';
import InterpolateColor from './src/interpolate-color/InterpolateColor';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ScrollViewPanGesture"
            component={ScrollViewPanGesture}
          />
          <Stack.Screen name="InterpolateColor" component={InterpolateColor} />
          <Stack.Screen
            name="ColorPickerContainer"
            component={ColorPickerContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
