import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import LoginForm from "./LoginForm"
// import RegistrationForm from './RegistrationForm';
import ToDoApp from './TodoApp';

function App() {
  // const [isRegistered, setIsRegistered]=useState(true);
  return (
    <div className="App">
      {/* {!isRegistered?<RegistrationForm/>:<LoginForm/>} */}
      <ToDoApp/>
    </div>
  );
}

export default App;

