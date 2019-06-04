import React, {Component} from 'react';
import {Grid} from 'react-mdl';
import { Document, Page, pdfjs } from "react-pdf"; pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component{
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };
  
    goToPrevPage = () =>
      this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
  
    render() {
      const { pageNumber, numPages } = this.state;
  
      return (
        <div className="resume-body">
        <div className="resume-nav">
          <nav>
            <button className="resume-nav-button-prev" onClick={this.goToPrevPage}>Prev </button>
            <button className="resume-nav-button-next" onClick={this.goToNextPage}>Next</button>
          </nav>
        </div>
          <div className ="pdf-doc" >
            <Document
              file="./softwarecv.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={800}  />
            </Document>
          </div>
            <br/>
          <p className="pagination">
            Page {pageNumber} of {numPages}
          </p>

        </div>
      
      );
    }
  }
export default Resume;