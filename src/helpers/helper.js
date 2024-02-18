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

export { shortenText, capitalizeFirstLetter };
