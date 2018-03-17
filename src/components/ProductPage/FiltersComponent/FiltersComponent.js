import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { CATEGORIES_LIST, COLORS_LIST } from '../../../constants/ProductPageConstants';
import { filtersChanged } from '../../../reducers/ProductPageReducer';
import './FiltersComponent.scss';

const COLORS_DROPDOWN_LIST = Object.keys(COLORS_LIST).map(key => ({
  value: COLORS_LIST[key],
  label: COLORS_LIST[key]
}));

const CATEGORIES_DROPDOWN_LIST = Object.keys(CATEGORIES_LIST).map(key => ({
  value: CATEGORIES_LIST[key],
  label: CATEGORIES_LIST[key]
}));

const FiltersComponent = (props) => {
  return <div className={ 'FiltersComponent' }>
    <div>
      <Select
        className={ 'FiltersComponent__filter' }
        placeholder={ 'Colors' }
        multi
        closeOnSelect={ false }
        name="colors"
        value={ props.colors }
        onChange={ props.filtersChanged('colors') }
        options={ COLORS_DROPDOWN_LIST }
      />
    </div>
    <div>
      <Select
        className={ 'FiltersComponent__filter' }
        placeholder={ 'Categories' }
        multi
        closeOnSelect={ false }
        name="categories"
        value={ props.categories }
        onChange={ props.filtersChanged('categories') }
        options={ CATEGORIES_DROPDOWN_LIST }
      />
    </div>
  </div>;
};

FiltersComponent.PropTypes = {
  colors: PropTypes.array,
  categories: PropTypes.array
};

export default connect(
  (state) => ({ ...state.ProductPageReducer.selectedProductFilters }),
  { filtersChanged }
)(FiltersComponent);

