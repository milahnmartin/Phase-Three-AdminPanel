import React, { useState, useEffect } from "react";
import "../App.css";
import LoginNav from "../components/LoginNav";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, Box, Typography } from "@mui/material";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [input, setInput] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("primary");
    const [btn_val, setbtn_val] = useState("Sign In");
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { id, value } = e.target;
        console.log(id, value);
        switch (id) {
            case "password":
                setInput((prevState) => ({
                    ...prevState,
                    password: value,
                }));
                break;
            case "username":
                setInput((prevState) => ({
                    ...prevState,
                    username: value,
                }));
                break;

            default:
                throw Error("DEFAULT WAS HIT IN SWITCH");
                break;
        }
    };
    const handleLogin = async () => {
        // const username = document.getElementById("username").value;
        // const password = document.getElementById("password").value;

        if (input.username === null || input.passowrd === null) {
            console.log(input.name, input.passowrd);
        } else {
            console.log(input);
            try {
                setLoading(true);
                const user = await signInWithEmailAndPassword(
                    auth,
                    input.username,
                    input.passowrd
                );
                setLoading(false);
                navigate("../", { replace: true });
            } catch (e) {
                setError("error");
                setbtn_val("Something Went Wrong");
                setLoading(false);

                setTimeout(() => {
                    setError("primary");
                    setbtn_val("Sign In");
                }, 3000);
            }
        }
    };

    useEffect(() => {
        if (loading) {
            console.log("WE ARE LOADING");
        } else {
            console.log("NOTHING IS LOADING");
        }
    }, [loading]);

    return (
        <div className='login-container'>
            <LoginNav />
            <div className='phase-login-container'>
                <div className='admin-auth'>
                    <TextField
                        sx={{
                            marginBottom: "20px",
                            color: "white",
                        }}
                        className='input'
                        id='username'
                        label='Username'
                        variant='filled'
                        onChange={handleInput}
                    />
                    <TextField
                        sx={{
                            marginTop: "20px",
                            marginBottom: "45px",
                        }}
                        className='input'
                        id='password'
                        label='Password'
                        variant='filled'
                        type='password'
                        onChange={handleInput}
                    />
                    {loading ? (
                        <LoadingButton loading variant='outlined'>
                            Submit
                        </LoadingButton>
                    ) : (
                        <Button
                            variant='contained'
                            id='status-btn'
                            onClick={handleLogin}
                            color={error}
                        >
                            {btn_val}
                        </Button>
                    )}
                </div>
            </div>
            <Box
                sx={{
                    width: "100%",
                    height: 70,
                    bgcolor: "info.main",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    id='footer-text'
                    variant='subtitle2'
                    sx={{
                        letterSpacing: 2,
                    }}
                >
                    © Copyright 2022 • Phase Three Trading (Pty) Ltd
                </Typography>
            </Box>
        </div>
    );
}
