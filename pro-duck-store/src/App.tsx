import React from 'react';
import './App.css';


import MiniDrawer from "./components/Drawer/drawer";
import {Store} from "./pages/store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Cart} from "./pages/cart";
import {User} from "./pages/user";


function App() {
  return (
      <BrowserRouter>
      <MiniDrawer/>
      <main style={{display: 'flex', paddingLeft: '80px'}}>
          <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>}/>
              <Route path = "/store" component={Store}/>
              <Route path = "/cart" component={Cart}/>
              <Route path = "/user" component={User}/>
          </Switch>
      </main>
      </BrowserRouter>
   )
}

export default App;
