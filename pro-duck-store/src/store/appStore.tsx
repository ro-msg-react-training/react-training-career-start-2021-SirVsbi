import { applyMiddleware, createStore } from "redux";
import { ProductListState } from "../reducer/productListReducer";
import rootReducer from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import RootSaga from '../saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(RootSaga);

export interface AppState {
    productList: ProductListState;
}