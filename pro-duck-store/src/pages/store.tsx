import React from "react";
import ProductListDumb from "./product";

export function Store() {
    return <ProductListDumb productList={
        [
            {
                id: 1,
                name: "Test",
                category: 'test',
                price: 2.5,
                imageUrl: "https://image.shutterstock.com/image-illustration/green-lizard-female-260nw-294212183.jpg",
                description: 'desc'
            },
            {
                id: 2,
                name: "Test",
                category: 'test',
                price: 2.5,
                imageUrl: "https://image.shutterstock.com/image-illustration/green-lizard-female-260nw-294212183.jpg",
                description: 'desc'
            }
        ]

    } goToProduct={() => {
    }} goToCart={() => {}}/>
}