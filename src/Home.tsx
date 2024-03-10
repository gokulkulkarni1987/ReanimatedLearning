import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const handleScrollViewPantGestureClicked = React.useCallback(() => {
    navigation.navigate('ScrollViewPanGesture');
  }, [navigation]);
  const handleInterpolateColorClicked = React.useCallback(() => {
    navigation.navigate('InterpolateColor');
  }, [navigation]);
  const handleColorPickerClicked = React.useCallback(() => {
    navigation.navigate('ColorPickerContainer');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button
        title="ScrollViewPanGesture"
        onPress={handleScrollViewPantGestureClicked}
      />
      <Button
        title="InterpolateColor"
        onPress={handleInterpolateColorClicked}
      />
      <Button title="ColorPickerContainer" onPress={handleColorPickerClicked} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
