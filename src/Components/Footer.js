import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import xxx from "@mui/material";
 
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    // <Container fluid className="footer" style={{color:"black"}}>
    //   <Row>
    //     <Col md="4" className="footer-copywright " >
    //       <h3 style={{color:'black'}}>Designed and Developed by Tanmoy Das</h3>
    //     </Col>
    //     <Col md="4" className="footer-copywright">
    //       <h3>Copyright © {year} TD</h3>
    //     </Col>
    //   </Row>
    // </Container>
    <div style={{backgroundColor:'   #ccffff'}}>
      <footer > 
        <p>Website created with ♥ by 
          Tanmoy Das    © {year}
        </p>
      </footer>
    </div>
  );
}

export default Footer;