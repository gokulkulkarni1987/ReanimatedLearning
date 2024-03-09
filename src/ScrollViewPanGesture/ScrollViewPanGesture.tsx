import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  useDerivedValue,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import Page, {PAGE_WIDTH} from './Page';

const AnimatedView = Animated.createAnimatedComponent(View);

const titles = ["What's", 'up', 'mobile', 'devs?'];

const ScrollViewPanGesture = () => {
  const translateX = useSharedValue(0);
  const contextX = useSharedValue(0);
  const clampedTranslateX = useDerivedValue(() => {
    const MAX_TRANSLATE_X = -PAGE_WIDTH * (titles.length - 1);
    return Math.max(Math.min(translateX.value, 0), MAX_TRANSLATE_X);
  });

  const onDrag = Gesture.Pan()
    .onBegin(() => {
      contextX.value = clampedTranslateX.value;
      cancelAnimation(translateX);
    })
    .onChange(event => {
      translateX.value = event.translationX + contextX.value;
    })
    .onEnd(event => {
      translateX.value = withDecay({velocity: event.velocityX});
    });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={onDrag}>
        <AnimatedView style={[{flex: 1, flexDirection: 'row'}]}>
          {titles.map((title, index) => {
            return (
              <Page
                key={title}
                index={index}
                translateX={clampedTranslateX}
                title={title}
              />
            );
          })}
        </AnimatedView>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ScrollViewPanGesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
