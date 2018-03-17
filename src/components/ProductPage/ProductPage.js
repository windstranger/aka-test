import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FiltersComponent from './FiltersComponent/FiltersComponent';
import ProductList from './ProductList/ProductList';
import './ProductPage.scss';

class ProductPage extends Component {
  render() {
    return (
      <div className={ 'ProductPage' }>
        <FiltersComponent/>
        <ProductList/>
      </div>
    );
  }
}

ProductPage.propTypes = {
  productList: PropTypes.array,
  selectedProductFilters: PropTypes.shape({
    color: PropTypes.array,
    category: PropTypes.array
  })
};

export default connect(
  (state) => {
    return {
      ...state.ProductPageReducer
    };
  },
  (dispatch) => {
    return {};
  }
)(ProductPage);
