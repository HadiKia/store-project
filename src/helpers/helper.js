const shortenText = (text) => {
  const upperCasedText = text.toUpperCase();
  const shortenedText = upperCasedText.split(" ").slice(0, 2).join(" ");

  return shortenedText;
};

const capitalizeFirstLetter = (text) => {
  const words = text.split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const capitalizedText = capitalizedWords.join(" ");

  return capitalizedText;
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

export { shortenText, capitalizeFirstLetter, searchProducts, filterProducts };
