import Product from "./Product";

export default interface ProductView{
    product: Product;
    addToCart: (product: Product) => void;
    deleteProduct: (product: Product) => void;
}