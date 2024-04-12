import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Landing = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar/>
            <Grid container direction="row" spacing={8} alignContent="center" justifyContent="center" marginTop="3rem">
                <Grid item spacing={3}>
                </Grid>
                <Grid item spacing={3}>
                    <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate("/login")}>
                        Login
                    </Button>
                </Grid>
                <Grid item spacing={3}>
                    <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate("/register")}>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Landing;