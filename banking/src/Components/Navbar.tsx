import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContextProvider";

const Navbar = () => {

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <>
            <Box
             display="flex" justifyContent="center" alignContent="center" paddingTop="10rem">
                <Typography style={{color:"violet"}}><h1>
                    Banking App
                    </h1>
                </Typography>
                {user?.loggedIn === "true" && 
                <Button onClick={() => navigate('/logout')}>Logout</Button>
                }
            </Box>
        </>
    )
}

export default Navbar;