import {react, useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");
const [name, setName] = useState("");
const navigate = useNavigate();
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <button type="submit"
                   
                >Login</button>
            </form>
        </div>
    )
}

export default Login;