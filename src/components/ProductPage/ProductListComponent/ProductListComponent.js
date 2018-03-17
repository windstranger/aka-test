import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './ProductListComponent.scss';
import { filterProductsBySelection, getImageBySelectedColor } from './ProductListService';

const ProductListComponent = ({ filteredProductList, getImageBySelectedColor }) => {
  const renderColors = colors =>
    <div className={ 'ProductListComponent__item-colors' }>
      { colors.map(color => <span style={ { color: color } } key={ color }>{ color }</span>) }
    </div>;
  const renderItemFooter = productItem =>
    <div className={ 'ProductListComponent__item-footer' }>
      <span>{ productItem.name }</span>
      <span>${ productItem.price }</span>
    </div>;

  return <div className='ProductListComponent'>
    { filteredProductList.map(productItem => {
      return <div key={ productItem.id } className={ 'ProductListComponent__item' }>
        <img className={ 'ProductListComponent__item-image' } src={ getImageBySelectedColor(productItem) }
             alt={ productItem.name }/>
        <div>
          { renderColors(productItem.colors) }
          { renderItemFooter(productItem) }
        </div>
      </div>;
    }) }
  </div>;
};

ProductListComponent.PropTypes = {
  filteredProductList: PropTypes.array,
  getImageBySelectedColor: PropTypes.func
};

export default connect(
  (state) => ({
    filteredProductList: filterProductsBySelection(
      state.ProductPageReducer.productList,
      state.ProductPageReducer.selectedProductFilters
    ),
    getImageBySelectedColor: getImageBySelectedColor(state.ProductPageReducer.selectedProductFilters)
  })
)(ProductListComponent);
