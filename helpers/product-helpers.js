import { PRODUCTS } from './dummy-data';

export function getAllProducts() {
    return PRODUCTS;
};

export function getProductById(id) {
    return PRODUCTS.find((product) => product.id === id);
};

export function getFeaturedProducts() {
    return PRODUCTS.filter((product) => product.isFeatured);
};


export function getFilteredProducts(productFilter) {
    const {
        category,
        color
    } = productFilter;

    let filteredProducts = PRODUCTS.filter((product) => {
        const productCategory = product.category;
        const productColor = product.color;
        return productCategory === category && productColor === color;
    });

    return filteredProducts;
};