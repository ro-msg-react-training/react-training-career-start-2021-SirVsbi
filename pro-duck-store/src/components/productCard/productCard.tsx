import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProductModal, {ShowModal} from "./ProductModal";
import Product from "../../model/Product";
import {ProductCardStyle} from "../../styles/productCard.style";


export default function ProductCard(props: Product) {
    const classes = ProductCardStyle();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    onClick={ShowModal}
                    className={classes.media}
                    image={props.imageUrl}
                    title={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ProductModal/>
            </CardActions>
        </Card>
    );
}