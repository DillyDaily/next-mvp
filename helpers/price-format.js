export function usdPrice(price) {
    const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (priceFormat.format(price))
};