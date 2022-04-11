import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    CircularProgress,
    useFormControl,
    FormControl,
    OutlinedInput,
} from "@mui/material";
import { useSelector } from "react-redux";
import { db } from "../firebase-config";
import { ref, onValue, orderByChild, equalTo } from "firebase/database";
import Data from "../components/Data";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";
import MyCard from "../components/MyCard";
import "../App.css";
import GetUser from "../components/GetUser";
import { red } from "@mui/material/colors";

const useStyles = makeStyles({
    input: {
        color: "red",
        backgroundColor: "white",
    },
});

// setLoading(true);
// const clientsRef = ref(db, "clients/");
// onValue(clientsRef, (snapshot) => {
//     let data = snapshot.val();
//     setResponse(data);
//     console.log(data);
// });

function Client() {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState({});

    let query = useSelector((state) => state.query_reducer);

    useEffect(() => {
        document.title = "Phase Three Trading - Client";
    }, []);

    const requestData = async () => {
        const clientsRef = ref(db, "clients/");
        return new Promise((accept, deny) => {
            onValue(clientsRef, (snapshot) => {
                const my_data = snapshot.val();
                if (my_data != null) {
                    accept(my_data);
                } else {
                    accept({});
                }
                // Object.entries(response).map(([key, val]) => {
                //     if (key[0] === query[0]) {
                //         accept(val);
                //     }
                // });
            });
        });
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await requestData();

            Object.entries(data).map(([key, val]) => {
                if (query) {
                    if (query[0] === val.username[0].toUpperCase()) {
                        setResponse(val);
                    } else {
                        console.log("NOPE");
                    }
                } else {
                    setResponse(data);
                }
            });

            setLoading(false);
        };
        fetchData();
    }, [query]);

    return (
        <div className='main-container'>
            <Box className='box1 box'>
                <SearchBar
                    className='my-bar'
                    info={{
                        title: "Search Client",
                    }}
                />
                <Box
                    className='search-box'
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <GetUser />
                </Box>
            </Box>
            <Box
                className='box2 box'
                sx={{
                    backgroundColor: "primary.error",
                }}
            >
                {loading ? (
                    <CircularProgress
                        color='error'
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                        }}
                    />
                ) : (
                    Object.entries(response).map(([key, val]) => {
                        return (
                            <MyCard
                                id={
                                    val.username?.toUpperCase() +
                                    val.surname?.toUpperCase()
                                }
                                key={key}
                                username={val.username}
                                surname={val.surname}
                                email={val.email}
                            />
                        );
                    })
                )}
            </Box>
        </div>
    );
}

export default Client;
