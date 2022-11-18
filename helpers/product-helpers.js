export function avgRating(arr, reviews) {
    const sumAll = arr.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0);
    const avgRating = sumAll / reviews.length;
    return(avgRating);
};