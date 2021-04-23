import List from "@material-ui/core/List";
import React from "react";
import {DrawerListItem, ListItemProps} from "./drawerListItem";
import {Person, ShoppingCart, Store} from "@material-ui/icons";


let DrawerItems: ListItemProps[]


DrawerItems = [{
    title: 'Store',
    Icon: <Store/>
},
    {
        title: 'Cart',
        Icon: <ShoppingCart/>
    },
    {
        title: 'User',
        Icon: <Person/>
    }];

export default function DrawerList() {
    return (
        <List>
            {
                DrawerItems.map((props) =>
                    <DrawerListItem title={props.title} Icon={props.Icon}/>
                )
            }
        </List>
    );
}



