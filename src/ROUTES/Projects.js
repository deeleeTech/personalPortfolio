import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

export default function Projects() {

    const customStyles = {
        'container' : {
            padding: '10px',
            paddingTop: '70px'
        },
        'mainSection' : {
            height: '400px',
            paddingLeft: '30px',
            height: '100%'

        },
        'sideSection': {
            fontSize: '20px',
            color: 'white',
            textShadow: '1px 1px 15px black',
            paddingTop: '75px',
            textAlign: 'left',
            fontFamily: "'Aclonica', sans-serif",
            paddingLeft: '20px'
        },
        'header' : {
            fontSize: window.screen.width > 400 ? '144px' : '72px',
            fontWeight: '700',
            letterSpacing: '10px',
            fontFamily: "'Aclonica', sans-serif",
            textAlign: 'left',
            color: 'rgba(255,255,255,.8)',
            textShadow: '1px 0px 14px white',
            // textDecoration: 'underline black',
            textUnderlinePosition: 'under',
        },
        'projectsStyle' : {
          fontSize: '30px',
          fontFamily: "'Aclonica', sans-serif",
          color: 'white',
          textShadow: '1px 0px 14px white',
      },
      'spacerStyle' : {
        backgroundColor: 'rgba(255,255,255,.7)',
        height: '4px',
        borderLeft: '1px solid black',
        borderRight: '1px solid black'
    },
    }

    const mainAnimation = new Animation

    return (
      <Grid container sx={customStyles.container}>
          <Fade left duration={4000}>
              <div style={customStyles.projectsStyle}>
                  PROJECTS
              </div>
          </Fade>
          <Grid item xs={12} sx={{ padding: '20px', alignContent: 'center'}}>
              <LightSpeed right duration={3000}>
                  <div style={customStyles.spacerStyle}/>
              </LightSpeed>
          </Grid>
      </Grid>
  )
}
