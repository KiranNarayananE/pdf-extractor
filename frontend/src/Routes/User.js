import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route,Navigate } from "react-router-dom";



function UserRoute() {
    const IsUserAuth = useSelector((state) => state.User.Token);
    return (
        <>
            <Routes>
                
            </Routes>
        </>
    );
}

export default UserRoute;