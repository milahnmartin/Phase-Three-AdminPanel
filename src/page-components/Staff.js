import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { db } from "../firebase-config";
import Data from "../components/Data";
import "../App.css";

function Staff() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Phase Three Trading - Staff";
    }, []);

    return (
        <div className='main-container'>
            <Box className='box1 box'>
                <Typography variant='h1'>This is Staff</Typography>
            </Box>
            <Box
                className='box2 box'
                sx={{
                    backgroundColor: "primary.error",
                }}
            >
                <Data />
            </Box>
        </div>
    );
}

export default Staff;
