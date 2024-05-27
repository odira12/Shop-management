export const getTotalPrice = (products) => {
  return products.reduce((total, product) => total + (product.price * product.stock), 0);
};
