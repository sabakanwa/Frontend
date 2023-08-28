import React from "react"
import GuestNav from "./Components/GuestNav"
import Home from "./Page/Home"
import Login from "./Page/Login"
import SingUp from "./Page/SingUp"
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"

export default function Guest() {
    return (
        <>
       
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp/>} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
         
            
        </>
    )
}