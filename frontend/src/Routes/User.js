import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route,Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";


function UserRoute() {
    const IsUserAuth = useSelector((state) => state.User?.Token);
    return (
        <>
            <Routes>
            <Route path="/login" element={IsUserAuth ? <Navigate to="/" />  : <Login />} />    
            <Route path="/" element={<Home />} />    
            </Routes>
        </>
    );
}

export default UserRoute;