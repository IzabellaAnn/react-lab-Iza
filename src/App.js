import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

export default function App() {
    const [authenticatedUsername, setAuthenticatedUsername] = useState('');
    function logout () {
        setAuthenticatedUsername('');
    }

    let content;
    if (authenticatedUsername) {
        content = <div>
            <h2> Twój email to {authenticatedUsername} </h2>
            <button onClick= {logout}> Wyloguj sie </button>
        </div>
    } else {
        content = <div>
            <LoginForm
            onLogin={(email) => setAuthenticatedUsername (email)}
             buttonLabel = "Zaloguj sie. "/>
             <LoginForm
                onLogin={(email) => setAuthenticatedUsername (email)}
                buttonLabel = "Zartejestruj się. "/>
        </div>;
       }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            <h3>Zaloguj się e-mailem</h3>
            {content}
        </div>
    );
}