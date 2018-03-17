import React from 'react';
import { connect } from 'react-redux';
import './ProductList.scss';
import { filterProductsBySelection } from './ProductListService';

const ProductList = function ({ filteredProductList, selectedProductFilters }) {
  const getImageBySelectedColor = (productItem) => {
    let colorIndex = -1;
    selectedProductFilters.colors.findIndex(color => {
      colorIndex = productItem.colors.indexOf(color.value);
      return colorIndex > -1;
    });

    if (colorIndex > -1) {
      return productItem.pictureToImage[colorIndex];
    }

    /**
     * display first picture if no filter
     */
    return productItem.pictureToImage[0];
  };
  const renderColors = colors =>
    <div className={ 'ProductList__item-colors' }>
      { colors.map(color => <span style={ { color: color } } key={ color }>{ color }</span>) }
    </div>;
  const renderItemFooter = productItem =>
    <div className={ 'ProductList__item-footer' }>
      <span>{ productItem.name }</span>
      <span>${ productItem.price }</span>
    </div>;

  return <div className='ProductList'>
    { filteredProductList.map(productItem => {
      return <div key={ productItem.id } className={ 'ProductList__item' }>
        <img className={ 'ProductList__item-image' } src={ getImageBySelectedColor(productItem) }
             alt={ productItem.name }/>
        { renderColors(productItem.colors) }
        { renderItemFooter(productItem) }
      </div>;
    }) }
  </div>;
};

export default connect(
  (state) => {
    return {
      selectedProductFilters: state.ProductPageReducer.selectedProductFilters,
      filteredProductList: filterProductsBySelection(state.ProductPageReducer.productList, state.ProductPageReducer.selectedProductFilters)
    };
  }
)(ProductList);
