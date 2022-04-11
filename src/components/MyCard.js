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
                m: 1,
                width: "100%",
                height: 150,
                minHeight: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#42a5f5",
                color: "white",
            }}
        >
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.username} {props.surname}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.email}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Expiry Date
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='contained'>
                    INFO
                </Button>
                <Button size='small' variant='contained'>
                    Learn More
                </Button>
                <Button
                    id={props.id}
                    onClick={handleDelete}
                    size='small'
                    variant='outlined'
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
