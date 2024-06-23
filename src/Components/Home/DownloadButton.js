import React from 'react'
import "./DownloadButton.scss";
import PDF from '../../Assets/Tanmoy_Das.pdf';

const DownloadButton = () => {
  return (
    <>
      <div className="button" >
        <input id="button" type="checkbox" />
        <label htmlFor="button" >
        <a href={PDF} download="TanmoyDas_RESUME" className='atag' >
          <div className="button_inner q"style={{ marginLeft:'51%',marginTop:'-50px'}} >
           
              <i className="l fa-regular fa-circle-right"></i>
              <span className="t">Download Resume</span>
              <span>
                <i className="tick fa-regular fa-circle-check"></i>
              </span>
              <div className="b_l_quad">
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
                <div className="button_spots" />
              </div>
            
          </div>
          </a>
        </label>
      </div>
    </>
  );
}

export default DownloadButton