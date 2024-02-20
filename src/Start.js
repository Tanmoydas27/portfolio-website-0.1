import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './style.css';
import './App.css';
import Preloader from "./Components/Preload";
import NavBar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Components/Project/Project";
import Resume from "./Components/Resume/Resume";


function Start(){

    const [load,setLoad] =useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoad(false);
        }, 1200);
        return ()=> clearTimeout(timer);
    },[]);


    return(
        <>
            <Router>
                <Preloader load={load} />
                <ScrollToTop/>
                <div className="App" id={load ? "no-scroll":"scroll"}>
                    <NavBar />
                    
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/project" element={<Project/>} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Router>

        </>
    )
}
export default Start;