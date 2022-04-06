import React from "react";
import { Box, Typography } from "@mui/material";

function Staff() {
    return (
        <div className='staff-container'>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant='h1'>This is Staff</Typography>
            </Box>
        </div>
    );
}

export default Staff;
