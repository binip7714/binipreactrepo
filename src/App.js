import { useState } from 'react';
import './App.css';
// import Dashboard from './Dashboard';
// import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';
import TodoApp from './TodoApp'

function App() {
    // const [userDetail, setUserDetail] = useState({
    //     username: '',
    //     password: '',
    // });

    // const [isRegistered, setIsRegistered] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            {/* {isRegistered ? (
                isLoggedIn ? (
                    <Dashboard />
                ) : (
                    <LoginForm
                        userDetail={userDetail}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                )
            ) : (
                <RegistrationForm
                    setIsRegistered={setIsRegistered}
                    setUserDetail={setUserDetail}
                    userDetail={userDetail}
                />
            )} */}
            <TodoApp/>
        </div>
    );
}

export default App;