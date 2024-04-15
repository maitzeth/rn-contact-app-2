import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const vw = (percentage: number) => (width / 100) * percentage;

const vh = (percentage: number) => (height / 100) * percentage;

export {width, height, vw, vh};
