import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Grid from '@mui/material/Grid';
import resumePDF from '../__images/resumeDillon.pdf'

export default function Resume() {

  const customStyles = {
    'container' : {
      paddingTop: '20px'
    }
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid container sx={customStyles.container}>
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </Grid>
      <Grid item xs={5}
      
      ></Grid>
    </Grid>
  );
}

