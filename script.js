//your code here
const bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'Metallica', 'Aerosmith', 'The Rolling Stones', 'Nirvana'];

// Function to remove articles from the band names
const removeArticles = (name) => {
  // List of articles to be removed
  const articles = ['the', 'a', 'an'];

  // Convert the name to lowercase
  const lowercaseName = name.toLowerCase();

  // Check if the name starts with an article
  for (let article of articles) {
    if (lowercaseName.startsWith(article + ' ')) {
      // Remove the article from the name
      return name.substring(article.length + 1);
    }
  }

  return name;
};

// Remove articles and sort the band names
const sortedBandNames = bandNames.map(removeArticles).sort();

// Print the sorted band names
console.log(sortedBandNames);

