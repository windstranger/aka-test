export const filterProductsBySelection = (productList, selectedFilters) => {
  return productList.filter(product => {
    const { colors, categories } = selectedFilters;
    let colorsRes = colors.findIndex(color => product.colors.includes(color.value));
    let hasCategory = categories.map(category => category.value).includes(product.category);
    return (!colors.length || colorsRes > -1) && (!categories.length || hasCategory);
  });
};