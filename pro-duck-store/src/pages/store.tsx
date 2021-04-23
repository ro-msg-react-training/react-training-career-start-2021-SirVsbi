import React from "react";
import ProductCard from "../components/productCard/productCard";


export function Store() {
    return <div style={{display: 'grid'}}>
        <h2>Store page</h2>
        <ProductCard/>
        <ProductCard/>
         </div>
}