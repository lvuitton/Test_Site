// Sample product data (could be expanded or fetched from an API)
const products = [
    {
        name: "Eco-Friendly Water Bottle",
        image: "static/bed.jpg",
        description: "A reusable water bottle to reduce plastic waste. Stay hydrated sustainably!",
        link: "https://www.amazon.com/dp/B08XXXXXXX"
    },
    {
        name: "Organic Cotton Tote Bag",
        image: "static/bed.jpg",
        description: "Stylish, sturdy, and eco-friendly. Perfect for shopping or carrying everyday essentials.",
        link: "https://www.amazon.com/dp/B08XXXXXXX"
    },
    {
        name: "Bamboo Toothbrush",
        image: "static/bed.jpg",
        description: "Eco-friendly toothbrush made from bamboo. A small change for a big impact on the planet.",
        link: "https://www.amazon.com/dp/B08XXXXXXX"
    },
    {
        name: "Solar-Powered Phone Charger",
        image: "static/bed.jpg",
        description: "Charge your phone using renewable energy with this eco-friendly solar-powered charger.",
        link: "https://www.amazon.com/dp/B08XXXXXXX"
    }
];

// Function to load product data dynamically
function loadProductData(productIndex) {
    const product = products[productIndex];
    const productContainer = document.getElementById("product-details-container");

    // Update the product details on the page
    productContainer.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <a href="${product.link}" target="_blank" class="buy-btn">Buy Now</a>
    `;
}
