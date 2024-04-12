import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.clear();
        navigate("/")
    },[])
    return (<>
        <h1>Please wait...</h1>
    </>
    )
}

export default Logout;