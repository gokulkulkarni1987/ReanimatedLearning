import * as React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

interface PageProps {
  index: number;
  title: string;
  translateX: SharedValue<number>;
}

const {width: PAGE_WIDTH} = Dimensions.get('window');

const Page: React.FC<PageProps> = ({index, title, translateX}) => {
  const pageOffset = PAGE_WIDTH * index;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value + pageOffset}],
    };
  });

  return (
    <Animated.View
      key={title}
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
        },
        rStyle,
      ]}>
      <Text
        style={{
          fontSize: 70,
          fontWeight: '700',
          letterSpacing: 1.5,
          color: 'black',
          textTransform: 'uppercase',
        }}>
        {title}
      </Text>
    </Animated.View>
  );
};

export {PAGE_WIDTH};

export default Page;
