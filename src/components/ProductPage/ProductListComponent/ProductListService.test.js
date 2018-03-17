import { CATEGORIES_LIST, COLORS_LIST } from '../../../constants/ProductPageConstants';
import { filterProductsBySelection, getImageBySelectedColor } from './ProductListService';

let productList = [
  {
    id: 1,
    colors: [
      COLORS_LIST.BLACK,
      COLORS_LIST.RED,
      COLORS_LIST.BLUE,
      COLORS_LIST.PINK
    ],
    category: CATEGORIES_LIST.ACCESSORIES
  },
  {
    id: 2,
    colors: [
      COLORS_LIST.WHITE,
      COLORS_LIST.GREEN,
      COLORS_LIST.ORANGE,
      COLORS_LIST.PINK
    ],

    category: CATEGORIES_LIST.BACKPACKS
  },
  {
    id: 3,
    colors: [
      COLORS_LIST.VIOLET,
      COLORS_LIST.YELLOW,
      COLORS_LIST.BLACK,
      COLORS_LIST.PINK
    ],
    category: CATEGORIES_LIST.BACKPACKS
  },
  {
    id: 4,
    colors: [
      COLORS_LIST.BLACK,
      COLORS_LIST.ORANGE,
      COLORS_LIST.YELLOW,
      COLORS_LIST.PINK
    ],
    category: CATEGORIES_LIST.LUGGAGE
  }
];

test('should get image on color selection', () => {
  let productItem = {
    pictureToImage: [1, 2],
    colors: ['red', 'yellow']
  };
  expect(getImageBySelectedColor({ colors: [{ value: 'red' }] })(productItem) === 1);
  expect(getImageBySelectedColor({ colors: [{ value: 'yellow' }] })(productItem) === 2);
  expect(getImageBySelectedColor({ colors: [] })(productItem) === 1);
});

test('should filter productList on color', () => {
  let selectedFilters = { colors: [{ value: 'red' }], categories: [] };
  expect(filterProductsBySelection(productList, selectedFilters)).toMatchSnapshot();
  selectedFilters = { colors: [{ value: 'red' }, { value: 'yellow' }], categories: [] };
  expect(filterProductsBySelection(productList, selectedFilters)).toMatchSnapshot();
});

test('should filter productList on category', () => {
  let selectedFilters = { colors: [], categories: [{ value: CATEGORIES_LIST.LUGGAGE }] };
  expect(filterProductsBySelection(productList, selectedFilters)).toMatchSnapshot();
  selectedFilters = { colors: [], categories: [{ value: CATEGORIES_LIST.BACKPACKS }] };
  expect(filterProductsBySelection(productList, selectedFilters)).toMatchSnapshot();
});

test('should filter productList on category and color', () => {
  let selectedFilters = {
    colors: [{ value: COLORS_LIST.RED }, { value: COLORS_LIST.YELLOW }],
    categories: [{ value: CATEGORIES_LIST.LUGGAGE }]
  };
  expect(filterProductsBySelection(productList, selectedFilters)).toMatchSnapshot();
  selectedFilters = {
    colors: [],
    categories: []
  };
  expect(filterProductsBySelection(productList, selectedFilters)).toMatchSnapshot();
});
