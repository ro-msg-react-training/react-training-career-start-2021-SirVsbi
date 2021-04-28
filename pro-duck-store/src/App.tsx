import React from 'react';
import MiniDrawer from "./components/Drawer/drawer";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {User} from "./pages/user";
import NotFound from "./pages/NotFound";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import appTheme from "./styles/AppTheme";
import Cart from "./pages/cart";
import ProductListSmart from "./components/ProductList";
import ProductViewWithState from "./components/ProductList";

function App() {
    return (
        <MuiThemeProvider theme={appTheme}>
            <CssBaseline>
                <BrowserRouter>
                    <MiniDrawer/>
                    <main style={{display: 'flex', paddingLeft: '80px'}}>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/store"/>
                            </Route>
                            <Route path="/store" component={ProductListSmart}/>
                            <Route path="/product/:id" component={ProductViewWithState}/>
                            <Route path="/cart" component={Cart}/>
                            <Route path="/user" component={User}/>
                            <Route path="/*" component={NotFound}/>
                        </Switch>
                    </main>
                </BrowserRouter>
            </CssBaseline>
        </MuiThemeProvider>
    )
}

export default App;
