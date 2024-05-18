import logo from './logo.svg';
import './App.css';
import {useState} from "react";

export default function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isLogged, setLogin] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function logout () {
        setLogin(false);
        setEmail('');
    }

    let content;
    if (isLogged) {
        content = <div>
            <h2> Twój email to {email} </h2>>
            <button onClick={() => setLogin(false)} > Wyloguj sie </button>
        </div>
    } else {
        content = <div>
            <input type= "text" onChange={handleChange}/>
            <button onClick={() => setLogin(true)}> Zaloguj sie </button>
        </div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}