import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}
