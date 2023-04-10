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
  const two = '#69ace4';
  const three = '#4899de';
  const four = '#2787d8';
  const five = '#2172b7';
  const six = '#1b5d96';
  const seven = '#154974';
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

    choropleth: {
      bluish: [two, three, four, five, six, seven],
      greenish: [
        '#47EC9D',
        '#37D489',
        '#31BC7A',
        '#31BC7A',
        '#258D5B',
        '#1F764C',
        '#1F764C',
      ],
      pinkish: [
        // generator url -> https://www.shadegenerator.com/
        //generator color #CF5272(Pinkle)
        // background - color #F3D4DC
        '#D66C87',
        '#D15B79',
        '#C54E6C',
        '#BA4A67',
        '#B04661',
        '#A6425B',
        '#722D3F',
      ],
      yellowish: [
        // generator color #F2AE30
        // background - color #FBE7C1
        '#F5C264',
        '#F4BA4F',
        '#F3B23A',
        '#E6A52E',
        '#CE9429',
        '#A97A22',
      ],
      aubergine: [
        // generator color #400036
        // background - color #D9CCD7
        '#704068',
        '#5D2654',
        '#53194A',
        '#4A0D40',
        '#3D0033',
        '#3A0031',
        '#2D0026',
      ],
      goldenApricot: [
        // generator color #F3D6C5
        // background - color #F9EBE2
        '#F5DCCE',
        '#F4D8C8',
        '#DBC1B1',
        '#B6A194',
        '#9E8B80',
        '#61564F',
        '#6D6059',
      ],
    },
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
