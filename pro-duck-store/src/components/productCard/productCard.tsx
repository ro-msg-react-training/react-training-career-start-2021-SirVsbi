import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProductModal, {ShowModal} from "./ProductModal";
import Product from "../../model/Product";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 200,
    },
});

export default function ProductCard(props: Product) {
    const classes = useStyles();

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