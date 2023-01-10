import React from 'react';

const Dashboard = (props) => {
    const {userInput} = props
    const {username} = userInput
    return (
        <>
            <h1>Hello {username}</h1>
        </>
    );
}

export default Dashboard