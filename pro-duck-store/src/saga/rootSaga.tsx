import { all } from "redux-saga/effects";
import {
    watchDeleteProductAsync,
    watchFetchProductsAsync,
} from "./productListSaga";


export default function* RootSaga() {
    yield all([
        watchFetchProductsAsync(),
        watchDeleteProductAsync(),
    ]);
}