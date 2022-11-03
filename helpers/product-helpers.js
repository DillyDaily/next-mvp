// // import { PRODUCTS } from '../data/dummy-data';

// export function getAllProducts() {
//     return PRODUCTS;
// };

// export function getProductById(id) {
//     return PRODUCTS.find((product) => product.id === id);
// };

export function usdPrice(price) {
    const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (priceFormat.format(price))
};


export function avgRating(arr, reviews) {
    const sumAll = arr.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0);
    const avgRating = sumAll / reviews.length;
    return(avgRating);
};


// export function getFeaturedProducts() {
//     return PRODUCTS.filter((product) => product.isFeatured);
// };


// export function getFilteredProducts(productFilter) {
//     const {
//         category,
//         color
//     } = productFilter;

//     let filteredProducts = PRODUCTS.filter((product) => {
//         const productCategory = product.category;
//         const productColor = product.color;
//         return productCategory === category && productColor === color;
//     });

//     return filteredProducts;
// };