import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

interface PinchGestureHandlerProps {}

const imageUri =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

const PinchGestureHandler: React.FC<PinchGestureHandlerProps> = ({}) => {
  return <Image style={{flex: 1}} source={{uri: imageUri}} />;
};

export default PinchGestureHandler;

const styles = StyleSheet.create({
  container: {},
});
