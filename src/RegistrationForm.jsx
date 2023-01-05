import React, { useEffect } from 'react';
import { useState } from 'react';

const RegistrationForm = ({ setIsRegistered, Eye, EyeSlashed }) => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [emptyError, setEmptyError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [type, setType] = useState('password');
    const [hidden, setHidden] = useState(EyeSlashed);

    const { firstName, lastName, email, password, confirmPassword } = userInfo;

    // user handler function
    const firstHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, firstName: value });
        console.log(firstName);
    };
    const lastHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, lastName: value });
        console.log(lastName);
    };
    const emailHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, email: value });
        console.log(email);
    };

    // password handler function
    const passwordHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, password: value });
        console.log(password);
    };

    // confirm password handler function
    const confirmPasswordHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, confirmPassword: value });
        console.log(confirmPassword);
    };

    // submit handler function
    const registerHandle = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            if (password === confirmPassword) {
                alert(`Congratulation on registering ${email}`);
                setIsRegistered(false);
            } else {
                setPasswordError(true);
            }
        } else {
            setEmptyError(true);
        }
        
    };

    // toggle password view
    const toggleHidden = () => {
        if (type === 'password') {
            setType('text');
            setHidden(Eye);
        } else {
            setType('password');
            setHidden(EyeSlashed);
        }
    };

    useEffect(() => {
        console.log('I am working!!');
    }, []);

    return (
        <>
            <form>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={firstHandle}
                        placeholder="firstName"
                    />
                    {emptyError && firstName === '' && (
                        <p>Field must not be empty</p>
                    )}
                    <label>Last Name: </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={lastHandle}
                        placeholder="lastName"
                    />
                    {emptyError && lastName === '' && (
                        <p>Field must not be empty</p>
                    )}
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={emailHandle}
                        placeholder="email"
                    />
                    {emptyError && email === '' && (
                        <p>Field must not be empty</p>
                    )}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type={type}
                        id="password"
                        value={password}
                        onChange={passwordHandle}
                        placeholder="Password"
                    />
                    <span onClick={toggleHidden}>{hidden}</span>
                    {emptyError && password === '' && (
                        <p>Field must not be empty</p>
                    )}
                </div>

                <div>
                    <label>Confirm password: </label>
                    <input
                        type={type}
                        value={confirmPassword}
                        onChange={confirmPasswordHandle}
                        placeholder="Confirm Password"
                    />
                    <span onClick={toggleHidden}>{hidden}</span>
                    {passwordError && password !== confirmPassword && (
                        <p>Passwords do not match</p>
                    )}
                </div>
                <button onClick={registerHandle}>Register</button>
            </form>
        </>
    );
};

export default RegistrationForm;