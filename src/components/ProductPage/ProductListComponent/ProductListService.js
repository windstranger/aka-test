/**
 * filters productList by colors array and categories array
 * apply filters with 'and' operator
 * @param productList
 * @param selectedFilters
 * @returns {*}
 */
export const filterProductsBySelection = (productList, selectedFilters) => {
  return productList.filter(product => {
    const { colors, categories } = selectedFilters;
    let colorsRes = colors.findIndex(color => product.colors.includes(color.value));
    let hasCategory = categories.map(category => category.value).includes(product.category);
    return (!colors.length || colorsRes > -1) && (!categories.length || hasCategory);
  });
};

/**
 * finds an image in the product item related to selected color by index
 * returns first image by default
 * @param selectedProductFilters
 * @returns {function(*): (string|number)}
 */
export const getImageBySelectedColor = selectedProductFilters => productItem => {
  let colorIndex = -1;
  selectedProductFilters.colors.findIndex(color => {
    colorIndex = productItem.colors.indexOf(color.value);
    return colorIndex > -1;
  });

  return colorIndex > -1
    ? productItem.pictureToImage[colorIndex]
    : productItem.pictureToImage[0];
};
