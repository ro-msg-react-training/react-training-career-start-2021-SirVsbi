import Product from "../model/Product";
import {useProductListStyles} from "../styles/products.styles";
import {Button, Grid, IconButton, Paper} from "@material-ui/core";
import ProductCard from "../components/productCard/productCard";
import {ShoppingCart} from "@material-ui/icons";


interface ProductListProps {
    productList: Product[];
    goToProduct: (id: number) => void;
    goToCart: () => void;
}

function ProductListDumb(props: ProductListProps) {
    const classes = useProductListStyles();

    let products = props.productList.map((product: Product, index: number) => (
        <Grid container key={index}>
            <Grid item className={classes.detail}>
                <ProductCard {...product} />
                <Button
                    color="primary"
                    onClick={() => props.goToProduct(product.id)}
                >
                    Details
                </Button>
            </Grid>
        </Grid>
    ));


    return (
        <Paper variant="outlined" className={classes.root}>
            <Grid container>
                <Grid item>
                    <h1 className={classes.header}>Store</h1>
                </Grid>
                <Grid item>
                    <IconButton
                        className={classes.cart}
                        color="primary"
                        onClick={() => {
                            props.goToCart();
                        }}
                    >
                        <ShoppingCart/>
                        Cart
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row">
                {products}
            </Grid>
        </Paper>
    )

}


export default ProductListDumb;