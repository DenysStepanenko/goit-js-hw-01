'use strict';
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Ukraine", 100, 10)); // Shipping to Ukraine will cost 110 credits


