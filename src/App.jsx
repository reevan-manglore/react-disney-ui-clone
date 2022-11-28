import React from "react";
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar";
import Landing from  "./pages/landing.jsx"
import Home from  "./pages/home.jsx"



function App() {
  return (
    <div className="App flex flex-col h-screen">
    <NavBar/>
    <main className="flex-grow flex-shrink-0 ">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
