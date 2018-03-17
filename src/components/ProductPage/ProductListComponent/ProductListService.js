export const filterProductsBySelection = (productList, selectedFilters) => {
  return productList.filter(product => {
    const { colors, categories } = selectedFilters;
    let colorsRes = colors.findIndex(color => product.colors.includes(color.value));
    let hasCategory = categories.map(category => category.value).includes(product.category);
    return (!colors.length || colorsRes > -1) && (!categories.length || hasCategory);
  });
};

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
