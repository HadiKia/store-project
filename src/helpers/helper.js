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

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

export {
  shortenText,
  capitalizeFirstLetter,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
};
