import ScrollViewPanGesture from './ScrollViewPanGesture/ScrollViewPanGesture';
import ColorPickerContainer from './color-picker/ColorPickerContainer';
import InterpolateColor from './interpolate-color/InterpolateColor';
import PinchGestureHandler from './pinch-gesture/PinchGestureHandler';

export const screens = [
  {
    name: 'ScrollViewPanGesture',
    component: ScrollViewPanGesture,
  },
  {
    name: 'InterpolateColor',
    component: InterpolateColor,
  },
  {
    name: 'PinchGestureHandler',
    component: PinchGestureHandler,
  },
  {
    name: 'ColorPickerContainer',
    component: ColorPickerContainer,
  },
];
