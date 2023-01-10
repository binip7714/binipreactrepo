import React from "react";
import { Button, TextField } from "@mui/material";
const Registration = (props) => {
    const { userInput, setUserInput, setIsRegister } = props;

    const { username, email, password, confirmPassword } = userInput;

    const handleUsername = ({ target: { value } }) => {
        setUserInput({ ...userInput, username: value.trim() });
    };
    const handleEmail = ({ target: { value } }) => {
        setUserInput({ ...userInput, email: value.trim() });
    };
    const handlePassword = ({ target: { value } }) => {
        setUserInput({ ...userInput, password: value.trim() });
    };
    const handleConfirmPassword = ({ target: { value } }) => {
        setUserInput({ ...userInput, confirmPassword: value.trim() });
    };

    const handleSignUpForm = (event) => {
        event.preventDefault();
        if (
            username === "" &&
            email === "" &&
            password === "" &&
            confirmPassword === ""
        ) {
            alert("Fill up all the required field");
        } else if (username === "") {
            alert("Select your username");
        } else if (email === "") {
            alert("Enter your email");
        } else if (password === "") {
            alert("choose your password");
        } else if (confirmPassword === "") {
            alert("Confirm your password");
        } else if (password !== confirmPassword) {
            alert("password must match");
        } else {
            setIsRegister(true);
        }
    };
    return (
        <>
            <form
                action=""
                onSubmit={handleSignUpForm}
                className="signup_container">
                <h1 className="signup_title">Registration</h1>
                <div className="signup_input_wrapper">
                    <TextField
                        type="text"
                        className="signup_input_field"
                        onChange={handleUsername}
                        value={username}
                        id="standard-basic"
                        label="Username"
                        variant="standard"
                    />
                </div>
                <div className="signup_input_wrapper">
                    <TextField
                        type="email"
                        className="signup_input_field"
                        onChange={handleEmail}
                        value={email}
                        id="standard-basic"
                        label="email"
                        variant="standard"
                    />
                </div>
                <div className="signup_input_wrapper">
                    <TextField
                        id="standard-basic"
                        label="password"
                        variant="standard"
                        type="password"
                        className="signup_input_field"
                        onChange={handlePassword}
                        value={password}
                    />
    
                </div>
                <div className="signup_input_wrapper">
                    <TextField
                        id="standard-basic"
                        label="confirm password"
                        variant="standard"
                        type="password"
                        className="signup_input_field"
                        onChange={handleConfirmPassword}
                        value={confirmPassword}
                    />
                    
                </div>
                <Button type="submit" variant="contained">
                    Sign Up
                </Button>
                {/* <button type='submit' className='signup_submit_btn'>Sign up</button> */}
            </form>
        </>
    );
};

export default Registration;