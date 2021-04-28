import {connect} from "react-redux";
import {Dispatch} from "redux";
import Product from "../model/Product";
import {productListFetchProducts} from "../actions/ProductListActions";
import {AppState} from "../store/appStore"
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import ProductListDumb from "../pages/product";
import {CircularProgress} from "@material-ui/core";

interface ProductListSmartProps {
    productList: Product[];
    isLoading: boolean;
    productListFetchProducts: () => void;
}

function ProductListSmart(props: ProductListSmartProps) {
    let history = useHistory();

    const goToProduct = (id: number) => {
        history.push(`product/${id}`);
    };

    const goToCart = () => {
        history.push("cart");
    };

    useEffect(() => {
        if (!props.isLoading) {
            return;
        }
        props.productListFetchProducts();
    });

    return (
        props.isLoading ? <CircularProgress color="primary"/> :
            <ProductListDumb productList={props.productList}
                             goToProduct={goToProduct}
                             goToCart={goToCart}
            />
    );
}

const mapStateToProps = (state: AppState) => ({
    isLoading: state.productList.isLoading,
    productList: state.productList.productList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    productListFetchProducts: () => dispatch(productListFetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListSmart);