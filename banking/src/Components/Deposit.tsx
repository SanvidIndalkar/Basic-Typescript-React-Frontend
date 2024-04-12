import { Box, Button, FormControl, FormLabel, Input, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContextProvider";

const Deposit = () => {

    const {user, setUser} = useContext(UserContext);
    const userId = user?.id;

    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.currentTarget.value));
    }

    const handleSubmit = async (e : React.FormEvent) => {
        console.log("In Submit " + amount);
        e.preventDefault();

        //put request for deposit
        const response = await axios.put("http://localhost:8080", amount)
        const data = await JSON.parse(response.data)
        navigate("/")
    }

    return (
        <>
        <Box display="flex" alignContent="center" justifyContent="center" marginTop="25rem">
            <Stack width="10rem">
                <form onSubmit={handleSubmit}>
                <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Enter Amount"
                        onChange={handleChange}
                        value={amount}
                        fullWidth
                        required
                    />
                <Link to="/"><Button type="button">Back</Button></Link>
                <Button type="submit">Deposit</Button>
                </form>
            </Stack>
        </Box>
        </>
    )
}

export default Deposit;