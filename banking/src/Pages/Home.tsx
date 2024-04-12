import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Deposit from "../Components/Deposit";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar/>
            <Grid container direction="column" spacing={8} alignContent="center">
                <Grid item spacing={3}>
                </Grid>
                <Grid item spacing={3}>
                    <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate("/check")}>
                        Check Balance
                    </Button>
                </Grid>
                <Grid item spacing={3}>
                    <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate("/deposit")}>
                        Deposit
                    </Button>
                </Grid>
                <Grid item spacing={3}>
                    <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate("/withdraw")}>
                        Withdraw
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;