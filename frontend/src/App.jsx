import React,{useState} from "react";
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import Form from "./components/Forms";
import Blog from "./components/Blog";

const App = () => {


  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/blog" element={< Blog/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App