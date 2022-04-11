import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { db } from "../firebase-config";
import { set, ref, push } from "firebase/database";
import "../App.css";

export default function GetUser() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = () => {
        setOpen(false);
        try {
            const username = document.getElementById("username").value;
            const surname = document.getElementById("surname").value;
            const email = document.getElementById("email").value;
            const subscription = document.getElementById("subscription").value;

            set(
                ref(
                    db,
                    `clients/${username.toUpperCase() + surname.toUpperCase()}`
                ),
                {
                    username,
                    surname,
                    email,
                    subscription,
                }
            );
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='get-user-container'>
            {/* <Button variant='contained' onClick={handleClickOpen}>
                ADD USER
            </Button> */}
            <AddBoxIcon
                onClick={handleClickOpen}
                sx={{
                    cursor: "pointer",
                    color: "white",
                }}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Client</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Welcome to adding the client page, here you will insert
                        all user info
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='username'
                        label='Name'
                        type='text'
                        fullWidth
                        variant='standard'
                    />
                    <TextField
                        margin='dense'
                        id='surname'
                        label='Surname'
                        type='text'
                        fullWidth
                        variant='standard'
                    />
                    <TextField
                        margin='dense'
                        id='email'
                        label='Email'
                        type='email'
                        fullWidth
                        variant='standard'
                    />
                    <TextField
                        margin='dense'
                        id='subscription'
                        label='Subscription Type'
                        type='text'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleInput}>ADD</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
