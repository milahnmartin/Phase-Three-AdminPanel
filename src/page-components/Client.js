import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Data from "../components/Data";
import "../App.css";

function Client() {
    const [loading, setLoading] = useState(false);
    return (
        <div className='main-container'>
            <Box className='box1 box' sx={{}}>
                <Typography variant='h1'>This is Client</Typography>
            </Box>
            <Box
                className='box2 box'
                sx={{
                    backgroundColor: "primary.error",
                }}
            >
                <Data />
                {loading ? console.log("YES") : console.log("NOPE")}
            </Box>
        </div>
    );
}

export default Client;
