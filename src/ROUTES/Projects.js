import React, { useEffect, useState } from 'react';
import { Grid, Drawer } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { MdOutlineKeyboardBackspace } from "react-icons/md";


import { projectList } from '../__data/ProjectsInfo';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {

    const customStyles = {
        'container' : {
            padding: '10px',
            paddingTop: '70px',
            paddingBottom: '40px'
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

    const mainAnimation = new Animation;
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const [ toggledDetails, setToggledDetails ] = useState(null);

    const handleDrawerOpen = (drawerDetails) => {
        setDrawerOpen(true);
        setToggledDetails(drawerDetails)
    }
    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setToggledDetails(null)
    }

    return (
        <Grid container sx={customStyles.container}>
            <Fade left duration={4000}>
                <div style={customStyles.projectsStyle}>
                    PROJECTS
                </div>
            </Fade>
            <Grid item xs={12} sx={{ paddingTop: '20px', alignContent: 'center'}}>
                <LightSpeed right duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {projectList.map((each, index)=>{
                        return(
                            <Grid item xs={12} sx={{ padding: '20px' }}>
                                <Slide left duration={2000}>
                                    <ProjectCard cardData={each} handleDetails={handleDrawerOpen} />
                                </Slide>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: '40px', alignContent: 'center'}}>
                <LightSpeed right duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>
            <Drawer
             anchor={'right'}
             open={drawerOpen}
             onClose={()=>handleDrawerClose()}
            >
                {toggledDetails ? <DrawerContents details={toggledDetails} goBack={handleDrawerClose} /> : null}
          </Drawer>
        </Grid>
    )
}


function DrawerContents(props){
    const drawerDetails = props.details;
    const closeDrawer = props.goBack;
    return(
        <Grid container sx={{ width: '330px', padding: '4px' }}>
            <Grid item xs={12} onClick={()=>closeDrawer()} sx={{ fontSize: '30px' }}>
                <MdOutlineKeyboardBackspace />
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '24px', padding: '10px' }}>
                <b>Project</b> : {drawerDetails.name}
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '24px', padding: '10px' }}>
                <b>Origin</b> : {drawerDetails.details.origin}
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '24px', padding: '10px' }}>
                <b>Overview</b> : {drawerDetails.details.stackSummary}
            </Grid>
        </Grid>
    )
}
