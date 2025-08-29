import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Doctors from './pages/Doctors';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
