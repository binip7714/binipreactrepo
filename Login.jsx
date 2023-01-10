import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
const Login = (props) => {
    const [loginInput, setLoginInput] = useState({
        login_username: "",
        login_password: "",
    });

    const { userInput, setIsLogin } = props;
    const { username, password } = userInput;

    const { login_username, login_password } = loginInput;
    const handleLoginUsername = ({ target: { value } }) => {
        setLoginInput({ ...loginInput, login_username: value });
    };
    const handleLoginPassword = ({ target: { value } }) => {
        setLoginInput({ ...loginInput, login_password: value });
    };
    const handleLoginForm = (event) => {
        event.preventDefault();
        if (login_username === "" && login_password === "") {
            alert("Enter your username and password");
        } else if (login_username === "") {
            alert("Enter your username");
        } else if (login_username !== username) {
            alert("invalid username");
        } else if (login_password === "") {
            alert("Enter your password");
        } else if (login_password !== password) {
            alert("invalid password");
        } else {
            setIsLogin(true);
        }
    };
    return (
        <>
            <form
                action=""
                onSubmit={handleLoginForm}
                className="login_container">
                <h1 className="login_title">Login</h1>
                <TextField
                    type="text"
                    className="login_input_field"
                    onChange={handleLoginUsername}
                    value={login_username}
                    id="standard-basic"
                    label="username"
                    variant="standard"
                />

                <TextField
                    type="password"
                    className="login_input_field"
                    onChange={handleLoginPassword}
                    value={login_password}
                    id="standard-basic"
                    label="password"
                    variant="standard"
                />

                <Button type="submit" variant="contained">
                    Login
                </Button>
            </form>
        </>
    );
};

export default Login;