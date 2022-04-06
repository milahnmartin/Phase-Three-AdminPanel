import React from "react";
import { Box, Typography } from "@mui/material";
function Status() {
    return (
        <div className='status-container'>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "red",
                }}
            >
                <Typography variant='h1'>This is Status</Typography>
            </Box>
        </div>
    );
}

export default Status;
