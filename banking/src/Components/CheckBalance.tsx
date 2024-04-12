import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContextProvider";

const CheckBalance = () => {

    const {user, setUser} = useContext(UserContext);
    const id = user?.id;

    const [amount, setAmount] = useState(null);

    const getBalance = async () => {

        //request for balance
        try{    
            const response = await axios.get("http://localhost:8080");
            const data = await JSON.parse(response.data)
            setAmount(data);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getBalance();
    },[]);

    return (
        <>
            <Box display="flex" flexDirection="column" alignContent="center"  justifyContent="center" marginTop="20rem" marginLeft="45rem">
                <Box>   
                <Typography style={{color:"violet"}}><h1>
                    Balance : {amount}
                    </h1>
                    </Typography>         
                    
                </Box>
                <Box marginLeft="5rem">
                    <Link to="/"><Button variant="outlined" type="button">Back</Button></Link>
                </Box>
            </Box>
        </>
    )
}

export default CheckBalance