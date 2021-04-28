import List from "@material-ui/core/List";
import React from "react";
import {DrawerListItem} from "./drawerListItem";
import {Person, ShoppingCart, Store} from "@material-ui/icons";
import {ListItemProps} from "../../model/DrawerListItemProp";

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
                DrawerItems.map((props, index) =>
                    <DrawerListItem key={index} title={props.title} Icon={props.Icon}/>
                )
            }
        </List>
    );
}



