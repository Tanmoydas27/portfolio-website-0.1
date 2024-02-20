import React from "react";
import Typewritter from "../TypeWritter";
import './home.css';
import DownloadButton  from "./DownloadButton";






function Home() {
  return (
    <>  
      <div className="container " style={{minHeight:'690px'}}>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center text-white" style={{marginTop: '10%',width:'100%'}}>
          <div className="row" style={{width:'100%',minHeight:'582px',paddingTop:'80px'}}>
            <div className="col-lg-6 col-sm-12 mt-3 felx-wrap align-items-center justify-content-center" style={{height:'400px'}}>
              <div>
                <img src="dp.jpg" alt="images1" className="homeDP" ></img>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12  mt-5 flex-wrap align-items-center justify-content-center" style={{textAlign:'start'}}  >
              <div className="homeContent">
                <h1 style={{color:'black'}}>Hi, I'm <span style={{color:'#42deff'}}> TANMOY</span></h1>
                <div style={{minHeight:'30px'}}>
                  <p className="type" style={{width:'100%',marginTop:'-10px'}}><Typewritter/></p>
                </div>
                <ul style={{width:'100%',marginLeft:'-34px',listStyle:'none'}}>
                  <li style={{width:'100%',marginTop:'15px'}}>
                    <h5 style={{color:'black'}}> <span>📞</span><a href="tel:6295100775" style={{color:'black', textDecoration:'none'}}>+91 6295100775</a></h5>
                  </li>
                  <li style={{width:'100%',marginTop:'15px'}}>
                    <h5 style={{color:'black'}}> <span>📧</span><a href="mailto:dast91330@gmail.com" style={{color:'black', textDecoration:'none'}}>dast91330@gmail.com</a></h5>
                  </li>
                  <li style={{width:'100%',marginTop:'15px'}}>
                    <h5 style={{color:'black'}}> <span>🌎</span>Kolkata, West Bengal, India.</h5>
                  </li>                
                </ul>
                <br/>
                <br/>
                <div style={{minHeight:'100px'}}>
                  <a  target="_blank" aria-label="true" href="https://www.facebook.com/profile.php?id=100011876958805&mibextid=2JQ9oc"><img src="facebook.png"width={35} height={35}></img></a>
                  <a style={{marginLeft:'25px'}} target="_blank" aria-label="true" href="https://www.instagram.com/exclusivetanmoy.2002?igsh=YzljYTk1ODg3Zg=="><img src="instagram.png"width={35} height={35}></img></a>
                  <a style={{marginLeft:'25px'}} target="_blank" aria-label="true" href="https://www.github.com/Tanmoydas27"><img src="github.png"width={35} height={35}></img></a>
                  <a style={{marginLeft:'25px'}} target="_blank" aria-label="true" href="https://www.linkedin.com/in/tanmoy-das-cse"><img src="linkedin.png"width={35} height={35}></img></a>
                </div> 
                <div>
                  {/* <a href={PDF} download="Example-PDF-document"  target="_blank"  rel="noreferrer"><button type="button" aria-label="downloadButton" className="btn px-5 mt-1" ><DownloadButton/></button></a> */}
                  <DownloadButton/>
                  
                </div>
              </div>
              
            </div>
            <br/>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;