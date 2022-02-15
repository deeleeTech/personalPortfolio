import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import {AiFillGithub,AiFillSmile} from 'react-icons/ai';
import { BiDetail } from "react-icons/bi";

export default function ProjectCard(props) {

    const customStyles = {
        'container' : {
            padding: '10px',
            backgroundColor: 'rgba(255,255,255,.7)',
            border: '2px solid white',
            borderRadius: '10px'
        },
        'projectImage' : {
            borderRadius: '10px',
            height: '380px',
            width: '100%',
            border: '1px solid white'
        },
        'nameStyle' : {
            fontSize: '28px',
            backgroundColor: 'rgba(0,0,0,.7)',
            border: '1px solid black',
            color: 'white',
            borderRadius: '15px',
            padding: '5px',
            letterSpacing: '2px',
            fontWeight: '600'
        },
        'technologiesTitle' : {
            fontSize: '28px',
            fontWeight: '600',
            letterSpacing: '3px',
            padding: '5px'
        },
        'techStyle' : {
            fontSize: '20px',
            padding: '8px'
        },
        'descriptionStyle' : {
            padding: '10px',
            borderTop: '2px solid rgba(0,0,0,.7)',
            backgroundColor: 'rgba(0,0,0,.1)',
            borderRadius: '10px'
        },
        'clientStyle' : {
            fontSize: '28px',
            width: '100%',
            border: '1px solid black',
            color: 'white',
            textShadow: '1px 0px black',
            backgroundColor: 'green',
            padding: '1px'
        },
        'serverStyle' : {
            fontSize: '28px',
            width: '100%',
            border: '1px solid black',
            color: 'white',
            textShadow: '1px 0px black',
            backgroundColor: 'blue',
            padding: '1px'
        },
        'detailsStyle' : {
            fontSize: '28px',
            width: '100%',
            border: '1px solid black',
            color: 'white',
            textShadow: '1px 0px black',
            backgroundColor: 'orange',
            padding: '1px'
        },
        'demoButtonStyle' : {
            padding: '1px',
            color: 'green',
            backgroundColor: 'rgba(255,255,255,.4)',
            border: '1px solid black'
        }
    }

    const handleExternalClick = (websiteURL) => {
        window.open(websiteURL)
    }

    const mainAnimation = new Animation;
    const projectData = props.cardData

    return (
      <Grid container sx={customStyles.container}>
          <Grid item xs={6} sx={{ paddingRight: '15px' }}>
              <img src={projectData.imagePath} style={customStyles.projectImage} />
          </Grid>
          <Grid item xs={6}>
              <Grid container>
                  <Grid item xs={12} sx={customStyles.nameStyle}>
                      {projectData.name}
                  </Grid>
                  <Grid item xs={12} sx={{ height: '10px' }}></Grid>
                  <Grid item xs={8}>
                      <Grid container sx={{ textAlign: 'left', fontSize: '18px' }}>
                          <Grid item xs={12}>
                              Title : {projectData.name} {projectData.demoAccess ? <Button sx={customStyles.demoButtonStyle}> Demo </Button> : null}
                          </Grid>
                          <Grid item xs={12}>
                              Started : {projectData.startDate}
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={4}>
                      <Grid container>
                          <Grid item xs={12}>
                            <Button disabled={!projectData.clientAccess} onClick={()=>handleExternalClick(projectData.githubLinkClient)} sx={customStyles.clientStyle}>
                                <AiFillGithub sx={{ fontSize: '40px' }} />CLIENT
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <Button disabled={!projectData.serverAccess} onClick={()=>handleExternalClick(projectData.githubLinkServer)} sx={customStyles.serverStyle}>
                                <AiFillGithub sx={{ fontSize: '40px' }} />SERVER
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <Button sx={customStyles.detailsStyle}>
                                <BiDetail sx={{ fontSize: '40px' }} />DETAILS
                            </Button>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={12} sx={{ height: '10px' }}></Grid>
              <Grid item xs={12} sx={customStyles.descriptionStyle}>
                    <Grid container>
                          <Grid item xs={12} sx={customStyles.technologiesTitle}>
                              TECH STACK
                          </Grid>
                          {projectData.technologies.map((each)=>{
                              return(
                                  <Grid item xs={3} sx={customStyles.techStyle}>
                                      {each}
                                    </Grid>
                              )
                          })}
                    </Grid>
              </Grid>
          </Grid>
      </Grid>
  )
}
