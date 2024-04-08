import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {AiFillStar,  AiOutlineHome,  AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";

import {CgFileDocument} from 'react-icons/cg';

function NavBar()
{
    const [expand,setExpand] = useState(false);
    const [navbar,setNavbar] = useState(false); 

    function scrollHandler(){
        if(window.scrollY >= 20)
        {
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);

    return(
        <>
            <Navbar expanded={expand} fixed="top" expand="md" className={navbar ? "sticky":"navbar"}>
                <Container>
                    <Navbar.Brand  className="d-flex" >
                        <Nav.Link as={Link} to="/" >
                            <img src="tanmoyname-removebg-preview.png" className="navbrandImg" alt="brand"/> 
                            
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>{setExpand(expand ? false : "expanded");}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" id="navv" defaultActiveKey="#home">
                            <Nav.Item className="itemcolor">
                                <Nav.Link as={Link} to="/" onClick={()=> setExpand(false)} >
                                    <span ><AiOutlineHome/> Home</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="itemcolor">
                                <Nav.Link as={Link} to="/about" onClick={()=> setExpand(false)} >
                                    <span><AiOutlineUser/> About</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="itemcolor">
                                <Nav.Link as={Link} to="/project" onClick={()=> setExpand(false)}>
                                    <span><AiOutlineFundProjectionScreen/> {" "} Projects</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="itemcolor">
                                <Nav.Link as={Link} to="/resume" onClick={()=> setExpand(false)}>
                                    <span><CgFileDocument  /> {" "} Resume</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;