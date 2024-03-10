import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface ColorPickerProps extends LinearGradientProps {
  maxWidth: number;
  onColorChanged?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  start,
  end,
  style,
  maxWidth,
  onColorChanged,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const contextX = useSharedValue(0);

  const adjustTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, 0),
      maxWidth - CIRCLE_PICKER_SIZE,
    );
  });

  const rCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustTranslateX.value},
        {scale: scale.value},
        {translateY: translateY.value},
      ],
    };
  });

  const rInternalPickerStyles = useAnimatedStyle(() => {
    const inputRange = colors.map(
      (_, index) => (index / colors.length) * maxWidth,
    );
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors as string[],
    );
    onColorChanged?.(backgroundColor);
    return {
      backgroundColor,
    };
  });

  const handleOnChange = React.useCallback(
    (event: any) => {
      'worklet';
      translateX.value = event.translationX + contextX.value;
    },
    [contextX.value, translateX],
  );

  const handleOnEnd = React.useCallback(() => {
    'worklet';
    translateY.value = withSpring(0);
    scale.value = withSpring(1);
  }, [scale, translateY]);

  const onTap = Gesture.Tap()
    .onStart(event => {
      translateX.value = withTiming(event.absoluteX - CIRCLE_PICKER_SIZE);
    })
    .onEnd(handleOnEnd);
  const onDrag = Gesture.Pan()
    .onBegin(() => {
      translateY.value = withSpring(-CIRCLE_PICKER_SIZE);
      scale.value = withSpring(1.2);
      contextX.value = adjustTranslateX.value;
    })
    .onChange(handleOnChange)
    .onEnd(handleOnEnd);

  const composed = Gesture.Race(onDrag, onTap);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={composed}>
        <Animated.View>
          <LinearGradient
            colors={colors}
            start={start}
            end={end}
            style={style}
          />
          <Animated.View style={[styles.picker, rCircleStyle]}>
            <Animated.View
              style={[styles.internalPicker, rInternalPickerStyles]}
            />
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ColorPicker;

const CIRCLE_PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  internalPicker: {
    position: 'absolute',
    backgroundColor: 'red',
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
  },
});
