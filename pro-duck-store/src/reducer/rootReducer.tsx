import { combineReducers } from "redux";
import { ProductListReducer } from "./productListReducer";


//here we will combine all the reducers so everything
//is easy to access
export default combineReducers({
    productList: ProductListReducer,
});