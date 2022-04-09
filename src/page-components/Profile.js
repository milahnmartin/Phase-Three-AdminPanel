import React from "react";
import { Box, Typography } from "@mui/material";

function Profile() {
    return (
        <div className='profile-container'>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant='h1'>This is Profile</Typography>
            </Box>
        </div>
    );
}

export default Profile;
