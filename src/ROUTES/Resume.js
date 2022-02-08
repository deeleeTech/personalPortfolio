import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Grid from '@mui/material/Grid';
import resumePDF from '../__images/resumeDillon.pdf';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import {AiFillPhone} from 'react-icons/ai'

export default function Resume() {

  const customStyles = {
    'container' : {
      paddingTop: '70px'
    },
    'resumeHeader' : {
      fontSize: '60px',
      fontWeight: '700',
      paddingTop: '40px',
      color: 'white',
      textShadow: '1px 0px 15px black',
      fontFamily: "'Aclonica', sans-serif",
      textDecoration: 'underline white',
      textUnderlinePosition: 'under',
      paddingBottom: '40px'
    },
    'socialStyle' : {
      paddingTop: '20px',
      fontSize: '70px',
      color: 'white',
    },
    'socialText' : {
      fontSize: '20px',
      backgroundColor: 'white',
      padding: '5px',
      letterSpacing: '2px',
      borderRadius: '10px',
      border: '1px solid black'
    }
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid container sx={customStyles.container}>
      <Grid item xs={1}></Grid>
      <Grid item xs={6}>
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </Grid>
      <Grid item xs={5}>
        <Grid container>
            <Grid item xs={12} sx={customStyles.resumeHeader}>
                RESUME
            </Grid>

            <Grid item xs={2} sx={customStyles.socialStyle}>
                <AiFillGithub style={{ border: '1px solid grey', borderRadius: '25px', backgroundColor: 'rgba(0,0,0,.7)' }}/>
            </Grid>
            <Grid item xs={9} sx={{ paddingTop: '40px' }}>
                <div style={customStyles.socialText}>
                   www.github.com/deeleeTech
                </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={2} sx={customStyles.socialStyle}>
                <AiFillLinkedin style={{ border: '1px solid grey', borderRadius: '25px', backgroundColor: 'rgba(0,0,0,.7)' }}/>
            </Grid>
            <Grid item xs={9} sx={{ paddingTop: '40px' }}>
                <div style={customStyles.socialText}>
                   linkedin.com/in/dillon-l-24ba3b1a9/
                </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={2} sx={customStyles.socialStyle}>
                <AiFillPhone style={{ border: '1px solid grey', borderRadius: '25px', backgroundColor: 'rgba(0,0,0,.7)' }}/>
            </Grid>
            <Grid item xs={9} sx={{ paddingTop: '40px' }}>
                <div style={customStyles.socialText}>
                   (830) 837-6140
                </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={2} sx={customStyles.socialStyle}>
                <GrLocation style={{ border: '1px solid black', borderRadius: '25px', backgroundColor: 'rgba(255,255,255,.8)', color: 'white' }}/>
            </Grid>
            <Grid item xs={9} sx={{ paddingTop: '40px' }}>
                <div style={customStyles.socialText}>
                   College Station, Texas
                </div>
            </Grid>
            <Grid item xs={1}></Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

