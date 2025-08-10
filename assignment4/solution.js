"use strict";

// Async Function 1: Random Number
const getRandomNumber = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 5) + 1;
            resolve(randomNum);
        }, 500);
    });
};

// Async Function 2: Get Nationality
const getNationality = async (name) => {
    try {
        const response = await fetch(`https://api.nationalize.io/?name=${name}`);
        const data = await response.json();
        return data.country[0].country_id; // Returns the most probable nationality code
    } catch (error) {
        throw new Error(`Could not get nationality: ${error}`);
    }
};

// Async Function 3: Fetch Product
const fetchProduct = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.title;
    } catch (error) {
        throw new Error(`Could not get products: ${error}`);
    }
};

// Async Function 4: Search Store Price
const searchStorePrice = async (product_name) => {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        const product = products.find(p => p.name.toLowerCase() === product_name.toLowerCase());
        if (!product) {
            throw new Error('Product not found');
        }
        return product.price;
    } catch (error) {
        throw new Error(`Could not get products: ${error}`);
    }
};

// Async Function 5: Star Wars API
const getStarWarsCharacters = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const characters = {};
        
        data.results.forEach(character => {
            characters[character.name] = character.url;
        });
        
        return { characters };
    } catch (error) {
        throw new Error(`Could not get Star Wars characters: ${error}`);
    }
};

// Export all functions
export {
    getRandomNumber,
    getNationality,
    fetchProduct,
    searchStorePrice,
    getStarWarsCharacters
};
