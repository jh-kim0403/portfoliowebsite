import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../assets/Jae_Kim_RPA_Developer_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

console.log(pdfjs.version);
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.mjs`;


export default function ResumeNew() {

    const [width, setWidth] = useState(1200);


    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ paddingTop: "50px" }}>
            <Particle id="particlesDark" color={true} />
            <Container fluid className="resume-section">

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        className="button-padding"
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" , margin: "50px"}}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page size="A4" pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" , margin: "50px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );

}