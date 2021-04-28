import Product from "../model/Product";
import axios from "axios";
import ProductSimple from "../model/productSimple";

export const url = "http://localhost:4000";

export async function getAllProducts(): Promise<ProductSimple[]> {
    return (await axios.get<ProductSimple[]>(`${url}/products`)).data;
}

export async function getProductById(id: number): Promise<Product> {
    return (await axios.get<Product>(`${url}/products/${id}`)).data;
}

export async function deleteProductById(id: number): Promise<any> {
    await axios.delete(`${url}/products/${id}`);
}