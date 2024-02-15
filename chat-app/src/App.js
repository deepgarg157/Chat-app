import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JoinRoom from './components/JoinRoom'
import Chat from "./components/Chat";
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <BrowserRouter>
            <Toaster position="top-center" reverseOrder={false} />
            <Routes>
                <Route path="/" element={<JoinRoom />}></Route>
                <Route path="/chat" element={<Chat />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;