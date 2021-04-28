import Grid from "@material-ui/core/Grid";
import {useProductListStyles} from "../styles/products.styles";
import ProductSimple from "../model/productSimple";

function ProductSimpleView(props: ProductSimple) {
    const classes = useProductListStyles();
    return (
        <Grid container>
            <Grid item className={classes.item}>
                {props.name}
            </Grid>
            <Grid item className={classes.item}>
                {props.category}
            </Grid>
            <Grid item className={classes.item}>
                {props.price}
            </Grid>
        </Grid>
    );
}

export default ProductSimpleView;