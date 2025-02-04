import React, {Component} from 'react';
import ProfileCard from "./ProfileCard";
import './About.css';
import eclipse from "../About/images/eclipse.png";
import oracle from "../About/images/oracle.png";
import windows from "../About/images/windows.png";
import java from "../About/images/java.png";
import c from "../About/images/c.png";
import cplus from "../About/images/cPlus.png";
import javascript from "../About/images/javascript.png";
import html from "../About/images/html.png";
import css from "../About/images/css.png";
import bootstrap from "../About/images/bootstrap.png";
import nodejs from "../About/images/nodejs.png";
import npm from "../About/images/npm.png";
import aws from "../About/images/aws.png";
import express from "../About/images/express-js.png";
import git from "../About/images/git.png";
import github from "../About/images/github.png";
import mongoDB from "../About/images/mongodb.png";
import mySQL from "../About/images/mysql.png";
import postman from "../About/images/postman.png";
import python from "../About/images/python.png";
import react from "../About/images/react.png";
import redux from "../About/images/redux.png";
import vscode from "../About/images/vs-code.png";
import linux from "../About/images/linux.png";
import Vercel from "../About/images/Vercel.png";
import Netlify from "../About/images/Netlify.png";
import Firbase from "../About/images/firebase.png";
import Docker from "../About/images/docker.png";
import Tailwind from "../About/images/tailwind.png";
import GoogleCloud from "../About/images/googlecloud.png";





function About(){

    return(
        <>
            <div className="about about-1st" >
                <div className="container">
                    <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center'>
                        <div className="row " style={{paddingTop:'110px'}}>
                            <div className="col-lg-5 col-sm-12 d-flex flex-wrap align-items-start justify-content-center justify-content-lg-end " style={{height:'500px'}}>
                                <div className='profilecard'>
                                    <ProfileCard/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-wrap align-items-start j justify-content-lg-start justify-content-md-center justify-content-sm-center text-start ">
                               <div className='details' style={{width:'100%'}}>
                                    <h3>
                                        Who am <span style={{color:'#4467c4',fontWeight:'bold'}}>I</span>?
                                    </h3>
                                    <p style={{fontSize:'20px'}}>
                                        Hello! I'm Tanmoy, a <span  style={{color:'#4467c4',fontWeight:'bold'}}>Software Developer/Web Developer</span>  based in{' '}<span  style={{color:'#4467c4',fontWeight:'bold'}}>Kolkata, West bengal, India</span>{' '}
                                        who's experienced in taking <span  style={{color:'#4467c4',fontWeight:'bold'}}>Full</span> Stack Development from scratch to production.
                                        <br/>
                                        <br/>
                                        I'm Currently Working On <span style={{color:'#4467c4',fontWeight:'bold'}}>
                                        BitesVilla Pvt Ltd as a Full Stack Developer
                                        </span>{' '} {' '}.Completed My Graduation From{' '}
                                        <span style={{color:'#4467c4',fontWeight:'bold'}}>
                                        Sister Nivedita University , West Bengal, India
                                        </span>{' '}
                                        as a Computer Science & Engineering  major & Open to Work With Domain Specific Organization.
                                        <br/>
                                        <br/>
                                        {
                                        "Over the last 4 years In my College, "
                                        }
                                        <span style={{color:'#4467c4',fontWeight:'bold'}}>
                                        I Work With Manny Projects And Experienced Knowledge
                                        </span>{' '}
                                        About The Real-World Projects And Industries levels.
                                        It includes
                                        developing client-side and  
                                        server-side applications with  Deployment.
                                    </p>
                               </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className="container ">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start text-white" style={{ width: "100%"}}>
                        <div className="row" style={{ width: "100%",marginTop:'20px' }}>
                            <h1 className='skills_heading'>  Professonal <span>Skillset</span></h1>
                            <div className="row" style={{ justifyContent: "center", paddingBottom: 50 }}>
                                <div className="tech-icons col-md-2 col-4 transition">
                                    <img width="80" height="80" src={c} alt="c-logo" className='tech-icon-images'/>
                                    <div className="techstack  " >
                                        <h4>C Language</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={cplus} alt="C++-logo" className='tech-icon-images' />
                                    <div className="techstack" >
                                        <h4>C++ Language</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={java} alt="java-logo"/>
                                    <div className="techstack" >
                                        <h4>Java</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={javascript} alt="javascript-logo"/>
                                    <div className="techstack" >
                                        <h4>JavaScript</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={python} alt="python-logo"/>
                                    <div className="techstack" >
                                        <h4>Python </h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={html} alt="html-logo"/>
                                    <div className="techstack" >
                                        <h4>HTML</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={css} alt="css-logo"/>
                                    <div className="techstack" >
                                        <h4>CSS</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={bootstrap} alt="bootstrap-logo"/>
                                    <div className="techstack" >
                                        <h4>BootStrap</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="70" height="70" src={Tailwind} alt="tailwind-logo"/>
                                    <div className="techstack" >
                                        <h4>Tailwind</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={npm} alt="npm-logo"/>
                                    <div className="techstack" >
                                        <h4>N.P.M</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={nodejs} alt="nodejs-logo"/>
                                    <div className="techstack" >
                                        <h4>NodeJS</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={express} alt="express-logo"/>
                                    <div className="techstack" >
                                        <h4>ExpressJS</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={react} alt="react-logo"/>
                                    <div className="techstack" >
                                        <h4>ReactJS</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={redux} alt="redux-logo"/>
                                    <div className="techstack" >
                                        <h4>Redux</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={mongoDB} alt="mongoDB-logo"/>
                                    <div className="techstack" >
                                        <h4>MongoDB</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={mySQL} alt="mySQL-logo"/>
                                    <div className="techstack" >
                                        <h4>My SQL</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={aws} alt="aws-logo"/>
                                    <div className="techstack" >
                                        <h4>AWS</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="70" height="70" src={GoogleCloud} alt="google-cloud-logo"/>
                                    <div className="techstack" >
                                        <h4>Google cloud</h4 >
                                    </div>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={git} alt="git-logo"/>
                                    <div className="techstack" >
                                        <h4>Git</h4 >
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <div  className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start text-white" style={{ marginTop: "2%", width: "100%" }} >
                        <div className="row" style={{ width: "100%" }}>
                            <h1 className='tools_heading'>  <span>Tools</span> I Use</h1>
                            <div  className="row"   style={{ justifyContent: "center", paddingBottom: 50 }}>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={Docker} width={70} height={70} alt='docker-logo'/>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={windows} width={80} height={80} alt='windows-logo'/>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={vscode} width={80} height={80} alt='vscode-logo'/>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={postman} width={80} height={80} alt='postman-api-logo'/>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={eclipse} width={80} height={80} alt='eclipse-logo'/>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={oracle} width={80} height={80}></img>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={linux} width={80} height={60}></img>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={Vercel} width={100} height={80}></img>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img width="80" height="80" src={github} alt="github-logo"/>
                                </div>
                                <div className="tech-icons col-md-2 col-4">
                                    <img src={Netlify} width={100} height={60}></img>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}
export default About;