import { CATEGORIES } from './dummy-data';

export function getAllCategories() {
    return CATEGORIES;
};

export function getCategoryById(id) {
    return CATEGORIES.find((category) => category.id === id);
};
