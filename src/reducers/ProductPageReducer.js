import { CATEGORIES_LIST, COLORS_LIST } from '../constants/ProductPageConstants';

const FILTERS_CHANGED = 'FILTERS_CHANGED';
const initialState = {
  productList: [
    {
      id: 1,
      name: 'test',
      price: 1000,
      colors: [
        COLORS_LIST.BLACK,
        COLORS_LIST.RED,
        COLORS_LIST.BLUE,
        COLORS_LIST.PINK
      ],
      category: CATEGORIES_LIST.ACCESSORIES,
      pictureToImage: [
        'http://placehold.it/760x500/ffffff?text=1',
        'http://placehold.it/760x500/afffff?text=2',
        'http://placehold.it/760x500/0fffff?text=3'
      ]
    },
    {
      id: 2,
      name: 'test',
      price: 2000,
      colors: [
        COLORS_LIST.WHITE,
        COLORS_LIST.GREEN,
        COLORS_LIST.ORANGE,
        COLORS_LIST.PINK
      ],

      category: CATEGORIES_LIST.BACKPACKS,
      pictureToImage: [
        'http://placehold.it/760x500/ffffff?text=1',
        'http://placehold.it/760x500/afffff?text=2',
        'http://placehold.it/760x500/0fffff?text=3'
      ]
    },
    {
      id: 3,
      name: 'test',
      price: 3000,
      colors: [
        COLORS_LIST.VIOLET,
        COLORS_LIST.YELLOW,
        COLORS_LIST.BLACK,
        COLORS_LIST.PINK
      ],
      category: CATEGORIES_LIST.BACKPACKS,
      pictureToImage: [
        'http://placehold.it/760x500/ffffff?text=1',
        'http://placehold.it/760x500/afffff?text=2',
        'http://placehold.it/760x500/0fffff?text=3'
      ]
    },
    {
      id: 4,
      name: 'test',
      price: 4000,
      colors: [
        COLORS_LIST.BLACK,
        COLORS_LIST.ORANGE,
        COLORS_LIST.YELLOW,
        COLORS_LIST.PINK
      ],
      category: CATEGORIES_LIST.LUGGAGE,
      pictureToImage: [
        'http://placehold.it/760x500/ffffff?text=1',
        'http://placehold.it/760x500/fffaff?text=2',
        'http://placehold.it/760x500/fff0ff?text=3'
      ]
    }
  ],
  selectedProductFilters: {
    colors: [],
    categories: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_CHANGED:
      return {
        ...state,
        selectedProductFilters: {
          ...state.selectedProductFilters,
          ...action.payload
        }
      };

    default:
      return state;
  }
}
export const filtersChanged = filterType => dispatch => selectedFilters => {
  dispatch({
    type: FILTERS_CHANGED,
    payload: {
      [filterType]: selectedFilters
    }
  });
};
