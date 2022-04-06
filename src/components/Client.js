import React from "react";
import { Box, Typography } from "@mui/material";

function Client() {
    return (
        <div className='client-container'>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant='h1'>This is Client</Typography>
            </Box>
        </div>
    );
}

export default Client;
