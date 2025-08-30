import React ,{  useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Login Page</h1>
            <form  className="space-y-4">
                <div>
                    <label htmlFor="username" className="block mb-1 font-medium">Username:</label>
                    <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    onChange={(e) => setName(e.target.value)}
                    required />
               
                </div>
                <button type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    </div>
)

}

export default Login;