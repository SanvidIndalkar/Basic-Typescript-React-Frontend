import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    const [logInfo, setLogInfo] = useState({
        name: "",
        password: ""
    });

    const loginRequest = () => {
        if (logInfo.name && logInfo.password) {
            //request for login
            sessionStorage.setItem("id", "1");
            sessionStorage.setItem("firstName", "firstName");
            sessionStorage.setItem('lastName', 'lastName');
            sessionStorage.setItem('role', "role");
            sessionStorage.setItem("loggedIn", "true");
            setUser?.({id: "1", firstName : "firstName", lastName : "lastName", role : 'role', 'loggedIn' : 'true'})
            navigate("/home")
        }
    }

    return (
        <>
            Login
        </>
    )
}

export default Login;