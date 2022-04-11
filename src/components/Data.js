import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Avatar, Grid, Skeleton } from "@mui/material";

function Data(props) {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Box flexbox>
                <Button variant='contained'>ADD USER</Button>
            </Box>
        </>
    );
}

export default Data;
