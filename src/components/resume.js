import React, {Component} from 'react';
import { Document, Page, pdfjs } from "react-pdf"; pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}

class Download extends React.Component {
    render() {
        return (
          <div className="resume-nav">
            <DownloadLink style={{color:'blue'}} src="./AmineBenaceurResume.pdf">Download</DownloadLink>
          </div>
        )
    }
}

class Resume extends Component{
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };
  
    render() {
      const { pageNumber, numPages } = this.state;
  
      return (
        <div className="resume-body">
          <Download src="./AmineBenaceurResume.pdf"/>
          <div className ="pdf-doc" >
            <Document
              file="./AmineBenaceurResume.pdf"
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
