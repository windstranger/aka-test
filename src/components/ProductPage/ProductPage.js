import React from 'react';
import FiltersComponent from './FiltersComponent/FiltersComponent';
import ProductListComponent from './ProductListComponent/ProductListComponent';
import './ProductPage.scss';

export default () =>
  <div className={ 'ProductPage' }>
    <FiltersComponent/>
    <ProductListComponent/>
  </div>


