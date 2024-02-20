import React,{useState, useEffect} from 'react'
import {Container, Row} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../Resume/Tanmoy Das Resume Software Developer.pdf';
import {AiOutlineDownload} from 'react-icons/ai';
import {Document, Page, pdfjs} from 'react-pdf';
import Particle from '../Particle';
import "../Resume/Resume.css";
import DownloadButton from '../DownloadButton';


pdfjs.GlobalWorkerOptions.workerSrc =`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {

    const [Width, setWidth] = useState(1200);

    useEffect(()=>{
            setWidth(window.innerWidth);
    },[]);


  return (
    <>
        <div style={{minHeight:'800px', backgroundColor:'#e7ebef'}}>
            <Container fluid className="resume-section" >
                <Particle/>
                <Row className="resume" style={{paddingTop:'10%'}}>
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageIndex={0} scale={Width > 500 ? 1.5 : 1}/>
                    </Document>
                    
                </Row>
                <Row style={{justifyContent:'center', position:'relative'}}>
                    <Button variant="primary" href={pdf}  target="_blank"  style={{ maxWidth: "250px" }}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
        
        
    </>
  );
}
export default Resume;