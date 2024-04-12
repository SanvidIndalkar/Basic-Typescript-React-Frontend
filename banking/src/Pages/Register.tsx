import React, { useState } from "react";

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "ROLE_USER",
        password: "",
    })
    return (
        <>
        Register
        </>
    )
}

export default Register;