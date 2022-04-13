import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { db, firebase } from "../firebase-config";
import { ref, update, child, remove, onValue } from "firebase/database";
import "../App.css";

export default function MediaCard(props) {
    const [loading, setLoading] = React.useState(false);

    const handleDelete = ({ target }) => {
        const clientRef = ref(db, `clients/`);
        onValue(clientRef, (snapshot) => {
            Object.entries(snapshot.val()).map(([key, val]) => {
                ref(`clients/${key}`).remove();
            });
        });
    };
    return (
        <Card
            id={props.id}
            sx={{
                mt: 2,
                width: "90%",
                height: 170,
                minHeight: 170,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-end",
                backgroundColor: "#90caf9",
                color: "white",
            }}
        >
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.username} {props.surname}
                </Typography>
                <Typography variant='body2' color='text.info'>
                    {props.email}
                </Typography>
                {props.expired ? (
                    <Typography variant='body2' color='text.info'>
                        Overdue: {Math.abs(props.expired)} Days
                    </Typography>
                ) : (
                    <Typography variant='body2' color='text.info'>
                        Join Date: {props.sub_details?.start}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size='small' variant='contained'>
                    INFO
                </Button>
                <Button size='small' variant='contained'>
                    DATES
                </Button>
                <Button
                    id={props.id}
                    onClick={handleDelete}
                    size='small'
                    variant='contained'
                    color='error'
                    sx={{
                        ml: 2,
                    }}
                >
                    DELETE
                </Button>
            </CardActions>
        </Card>
    );
}
