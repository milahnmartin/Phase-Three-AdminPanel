import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Data from "../components/Data";
import "../App.css";
function Status() {
    const [loading, setLoading] = useState(false);
    return (
        <div className='main-container'>
            <Box className='box1 box' sx={{}}>
                <Typography variant='h1'>This is Status</Typography>
            </Box>
            <Box
                className='box2 box'
                sx={{
                    backgroundColor: "primary.error",
                }}
            >
                <Data
                    info={{
                        title: "This is Status",
                    }}
                />
            </Box>
        </div>
    );
}

export default Status;
