import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Avatar, Grid, Skeleton } from "@mui/material";

function Data() {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Box flexbox>
                <Button variant='contained'>ADD</Button>
            </Box>
        </>
    );
}

export default Data;
