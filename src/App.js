// import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from '../src/pages/auth/Login'
import Register from '../src/pages/auth/Register'
import Home from '../src/pages/Home'
import Header from './components/nav/Header'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from './pages/auth/RegisterComplete'

function App() {
  return (
    <div>
      <Header />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
      </Routes>
    </div>
  );
}

export default App;
