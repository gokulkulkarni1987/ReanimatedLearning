import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ColorPicker from './ColorPicker';

interface ColorPickerContainerProps {}

const COLORS = [
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'white',
];

const BACKGROUND_COLOR = 'rgba(0,0,0,0)';

const {width} = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.8;
const PICKER_WIDTH = width * 0.9;

const ColorPickerContainer: React.FC<ColorPickerContainerProps> = ({}) => {
  const pickedColor = useSharedValue<string>(COLORS[0]);

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pickedColor.value,
    };
  });

  const handleOnChanged = React.useCallback(
    (color: string) => {
      'worklet';
      pickedColor.value = color;
    },
    [pickedColor],
  );

  return (
    <>
      <View style={styles.topContainer}>
        <Animated.View style={[styles.circle, rStyle]} />
      </View>
      <View style={styles.bottomContainer}>
        <ColorPicker
          colors={COLORS}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}
          maxWidth={PICKER_WIDTH}
          onColorChanged={handleOnChanged}
        />
      </View>
    </>
  );
};

export default ColorPickerContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 3,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    height: 40,
    width: PICKER_WIDTH,
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
});
