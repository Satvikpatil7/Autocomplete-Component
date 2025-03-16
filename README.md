# Recipe Search with Debouncing and Caching

This project implements a search functionality for recipes with debouncing and caching to enhance performance and user experience.

## Features
- Debounced input handling to reduce API calls
- Caching of API responses to avoid redundant network requests
- Dynamic rendering of search results
- Hides results when clicking outside the input or results container

## Technologies Used
- JavaScript
- HTML/CSS

## How It Works
1. **Debouncing**: A timer delays API calls by 300ms to prevent excessive requests while the user is typing.
2. **Caching**: API responses are stored in a cache object to reuse data for repeated queries.
3. **Rendering**: The fetched results are dynamically displayed in the results container.
4. **Hiding Results**: Results are hidden when the user clicks outside the input or results container.

## API Endpoint
The script fetches data from `https://dummyjson.com/recipes/search?q={query}`.

## Usage
1. Type in the search input field to search for recipes.
2. View the results in real-time with reduced API calls due to debouncing.
3. Click outside the input or results container to hide the results.

