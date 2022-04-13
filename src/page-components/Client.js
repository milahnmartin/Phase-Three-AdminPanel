import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    CircularProgress,
    useFormControl,
    FormControl,
    OutlinedInput,
    Card,
} from "@mui/material";
import { useSelector } from "react-redux";
import { db } from "../firebase-config";
import { ref, onValue, orderByChild, equalTo } from "firebase/database";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";
import MyCard from "../components/MyCard";
import "../App.css";
import GetUser from "../components/GetUser";
import { red, white } from "@mui/material/colors";

const useStyles = makeStyles({
    input: {
        color: "red",
        backgroundColor: "white",
    },
});

function Client() {
    const [expiredLoading, setExpiredloading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const [expired, setExpired] = useState([]);

    let query = useSelector((state) => state.query_reducer);

    useEffect(() => {
        document.title = "Phase Three Trading - Client";
    }, []);

    const requestData = async () => {
        const clientsRef = ref(db, "clients/");
        return new Promise((accept) => {
            onValue(clientsRef, (snapshot) => {
                const my_data = snapshot.val();

                if (my_data != null) {
                    accept(my_data);
                } else {
                    accept({});
                }
            });
        });
    };

    // const get_data = async () => {
    //     const data = await requestData();
    //     Object.entries(data).map(([key, val]) => {
    //         const { start, end } = val.subscription_details;
    //         const start_date = new Date(start);
    //         const end_date = new Date(end);
    //         const Difference_In_Time =
    //             end_date.getTime() - start_date.getTime();
    //         let difference = Difference_In_Time / (1000 * 3600 * 24);

    //         if (difference <= 0) {
    //             console.log(val.username);
    //             return <MyCard username={val.username} />;
    //         } else {
    //             return;
    //         }
    //     });
    // };

    useEffect(() => {
        const get_expired = async () => {
            try {
                var data = [];
                const expird_data = await requestData();
                Object.keys(expird_data).map((e) => {
                    const obj = expird_data[e];
                    const { email, surname, username, subscription_details } =
                        obj;
                    const { start, end, type } = subscription_details;

                    const starting_date = new Date(start);
                    const ending_date = new Date(end);

                    const difference_date =
                        (ending_date.getTime() - starting_date.getTime()) /
                        (1000 * 3600 * 24);

                    if (difference_date <= 0) {
                        console.log(`${email} is expired`);
                        data.push({ ...obj, difference_date });
                    } else {
                        console.log(`${email} is not expired`);
                    }
                });
            } catch (e) {
                console.log(e);
            } finally {
                setExpired(data);
                setExpiredloading(false);
                console.log(expired);
            }
        };
        get_expired();
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await requestData();
            setResponse([data]);
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
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        overflowY: "scroll",
                    }}
                >
                    <GetUser />
                    <Typography
                        variant='h3'
                        color='white'
                        textAlign='center'
                        sx={{
                            position: "relative",
                            top: 15,
                            letterSpacing: 2,
                            mb: 4,
                        }}
                    >
                        EXPIRED CLIENTS
                    </Typography>
                    {!expiredLoading ? (
                        expired.map((e) => {
                            return (
                                <MyCard
                                    key={e.email}
                                    username={e.username}
                                    surname={e.surname}
                                    email={e.email}
                                    expired={e.difference_date}
                                />
                            );
                        })
                    ) : (
                        <CircularProgress
                            color='warning'
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                            }}
                        />
                    )}
                </Box>
            </Box>
            <Box
                className='box2 box'
                sx={{
                    backgroundColor: "primary.error",
                }}
            >
                {!loading ? (
                    response.map((e) => {
                        return Object.entries(e).map(([key, val]) => {
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
                                    sub_details={val.subscription_details}
                                />
                            );
                        });
                    })
                ) : (
                    <CircularProgress
                        color='warning'
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                        }}
                    />
                )}
            </Box>
        </div>
    );
}

export default Client;

// {loading ? (
//     <CircularProgress
//         color='warning'
//         sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//         }}
//     />
// ) : (
//     Object.entries(response).map(([key, val]) => {
//         return (
//             <MyCard
//                 id={
//                     val.username?.toUpperCase() +
//                     val.surname?.toUpperCase()
//                 }
//                 key={key}
//                 username={val.username}
//                 surname={val.surname}
//                 email={val.email}
//             />
//         );
//     })
// )}
