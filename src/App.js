import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');


    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = <div> Masz krótki adress. </div>
    if (email.length > 15) {
        message = <div> Masz bardzi długi adress. </div>
    } else if (email.length > 5) {
        message = <div> Masz ok adress. </div>;
    }


    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            {message}
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}
export default App;