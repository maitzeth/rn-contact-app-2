import {BASE_TEXT_SIZE} from './constants';
import {vw as viewWidth, vh as viewHeight} from './dimensions';

export const rem = (units: number, suffix = true) => {
  return suffix ? `${units * BASE_TEXT_SIZE}px` : units * BASE_TEXT_SIZE;
};

export const vw = (units: number, suffix = true) => {
  return suffix ? `${viewWidth(units)}px` : viewWidth(units);
};

export const vh = (units: number, suffix = true) => {
  return suffix ? `${viewHeight(units)}px` : viewHeight(units);
};
