// Select the search input and results container from the DOM
const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

// Cache object to store API responses for avoiding redundant API calls
let cache = {}; 

// Timer variable for implementing debounce functionality
let timer; 

// Function to fetch data from the API
const fetchData = async (query) => {
  try {
    console.log("Fetching data for query:", query);

    // Check if the data is already in the cache
    if (cache[query]) {
      console.log("Cache hit for query:", query);
      return cache[query];
    }

    // Fetch data from the API if not in cache
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    const data = await response.json();

    // Store the fetched data in the cache
    cache[query] = data.recipes || [];
    console.log("Fetched data and cached it:", cache[query]);

    return cache[query];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Function to render results in the DOM
const renderResults = (results) => {
  console.log("Rendering results:", results);
  // Populate the results container with the fetched data
  resultsContainer.innerHTML = results
    .map((r) => `<span>${r.name}</span>`)
    .join("");
};

// Handle input event with debouncing
const handleInput = (event) => {
  const query = event.target.value.trim();
  console.log("Input event triggered with query:", query);

  // Clear the previous timer to avoid unnecessary API calls
  clearTimeout(timer); 

  // If the input is not empty, fetch data after the debounce delay
  if (query.length > 0) {
    timer = setTimeout(async () => {
      const results = await fetchData(query);
      renderResults(results);

      // Display the results container
      resultsContainer.style.display = 'block';
    }, 300); // Debounce delay of 300ms
  } else {
    // Clear results and hide the container when input is empty
    resultsContainer.innerHTML = "";
    resultsContainer.style.display = 'none';
  }
};

// Function to hide the results container
const hideResults = () => {
  console.log("Hiding results container");
  resultsContainer.style.display = 'none';
};

// Attach event listener to the search input
searchInput.addEventListener("input", handleInput);

// Hide results when clicking outside the results container and search input
document.addEventListener("click", (event) => {
  console.log("Document click event");
  if (!resultsContainer.contains(event.target) && event.target !== searchInput) {
    hideResults();
  }
});
