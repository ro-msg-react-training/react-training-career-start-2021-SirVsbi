import React from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom"


export type ListItemProps = {
    title: string,
    Icon?: any
}


export const DrawerListItem = ({title, Icon}: ListItemProps) =>
    <ListItem key={title} component={Link} to={"/" + title}>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText primary={title}/>
    </ListItem>

