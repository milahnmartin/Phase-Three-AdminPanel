import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Staff from "../components/Staff";
import Client from "../components/Client";
import Status from "../components/Status";
import Profile from "../components/Profile";
import { auth } from "../firebase-config";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "../App.css";

function Main() {
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState("Phase");

    const check_auth_state = async () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                let name = user.email.split("@");
                setUser(name[0]);
                setAuthState(true);
            } else {
                setAuthState(false);
            }
        });
    };
    useEffect(() => {
        check_auth_state();
        if (authState === false) {
            window.location.assign("/login");
        }
    }, [authState]);

    let c_view = useSelector((state) => state.view_reducer);

    const handelView = () => {
        switch (c_view) {
            case "CLIENTS":
                return <Client />;

            case "STAFF":
                return <Staff />;

            case "STATUS":
                return <Status />;

            case "PROFILE":
                return <Profile />;

            default:
                return <Staff />;
        }
    };

    return (
        <div className='login-container'>
            <Navbar main={user} />
            <Box
                sx={{
                    margin: "0 auto",
                    height: "87vh",
                    width: "100%",
                    backgroundColor: "rgb(133, 184, 211)",
                }}
            >
                {handelView()}
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: 60,
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

export default Main;
