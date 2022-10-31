// import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from '../src/pages/auth/Login'
import Register from '../src/pages/auth/Register'
import Home from '../src/pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
