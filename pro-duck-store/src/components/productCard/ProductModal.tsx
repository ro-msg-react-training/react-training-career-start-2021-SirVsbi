import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from "react";
import {Modal} from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";
import Button from "@material-ui/core/Button";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);


class SimpleModal extends React.Component {
    render() {
        return null;
    }
}


export type modalProps = {
    title: string,
    Icon?: any
}


export function ShowModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    return <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <SimpleModal/>
    </div>

}

export default function ProductModal() {
    // getModalStyle is not a pure function, we roll the style only on the first render

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = ShowModal()
    return (
        <div>
            <Button type="button"
                    onClick={handleOpen}
                    startIcon={<ShoppingBasket/>}
            >
                View details
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"

            >
                {body}
            </Modal>
        </div>
    );

}