import { shadeGenerator } from './utils';
const svgHeight = '800';
const svgWidth = '650';
export const SVG = {
  height: svgHeight,
  width: svgWidth,
  padding: 95,
  fill: '#61808c',
  spaceTop: 50,
  viewBox: `0 0 ${svgWidth} ${svgHeight}`, //min-x, min-y, width and height
  strokeWidth: 0.5,

  BAR: {
    spaceBetween: 10,
    paddingInner: 0.2,
  },
};

export const COLORS = (function () {
  const cotton1 = '#c6dbef'; //'#123859';
  const cotton2 = '#9ecae1'; //'#032f40';
  const cotton3 = '#2171b5'; //'#61808c';
  const cotton4 = '#08519c'; //'#bfd1d9';
  const cotton5 = '#08306b'; //'#013440';
  const greenLily = '#c1cec1';
  const peapod = '#82b185';
  const white = '#ffffff';
  const black = '#000000';

  const one = '#e4f0fa';
  const two = '#aed2f0';
  const three = '#78b4e6';
  const four = '#78b4e6';
  const five = '#2276bd';
  const six = '#195487';
  const seven = '#0f3251';
  const eight = '#05111b';

  return {
    cotton1,
    cotton2,
    cotton3,
    cotton4,
    cotton5,
    greenLily,
    peapod,
    white,
    black,

    choropleth: [two, three, four, five, six, seven],
  };
})();

const NORMALIZATION_METHODS = {
  MIN_MAX: 'min-max',
  Z_SCORE: 'z-score',
  LOG: 'log',
  BOX_COX: 'box-cox',
};

export const NORMALIZATION_METHOD_TYEPES = [
  NORMALIZATION_METHODS.BOX_COX,
  NORMALIZATION_METHODS.Z_SCORE,
  NORMALIZATION_METHODS.LOG,
  NORMALIZATION_METHODS.MIN_MAX,
];
