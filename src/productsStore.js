// Coffee: price_1LyEb0LWlOj1hnbDbwetVib6
// Sunglasses: price_1LyEg0LWlOj1hnbDhjC9m2rR
// Camera: price_1LyEiyLWlOj1hnbDRYAvm5wP 
import React from 'react';

const productsArray = [
    {
        id: "price_1LyEb0LWlOj1hnbDbwetVib6",
        title: "coffee",
        price: 4.99
    },
    {
        id: "price_1LyEg0LWlOj1hnbDhjC9m2rR",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1LyEiyLWlOj1hnbDRYAvm5wP",
        title: "Camera",
        price: 39.99
    }

]

function getProductData(id){

    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined){
        console.log("product data does not exist for ID: " + id);
        return undefined;

    }
    return productData;
}
export {productsArray, getProductData};