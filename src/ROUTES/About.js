import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

import aboutmePic from '../__images/aboutmePic.jpg'

import {languageSkills} from '../__data/Skills.js'

export default function Home() {

    const customStyles = {
        'container' : {
            padding: '10px',
            paddingTop: '50px',
            paddingBottom: '100px'
        },
        'imageStyle' : {
            backgroundImage: `url(${aboutmePic})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px',
            width: '70%',
            border: '2px solid black'
        },
        'headerStyle' : {
            fontSize: '28px',
            textShadow: '1px 0px 30px white',
            letterSpacing: '2px',
            paddingBottom: '25px'
        },
        'bodyStyle' : {
            backgroundColor: 'rgba(255,255,255,.9)',
            border: '1px solid black',
            padding: '10px',
            height: '100%',
            borderRadius: '20px',
            fontSize: '18px',
            letterSpacing: '2px',
            fontWeight: '500'
        },
        'spacerStyle' : {
            backgroundColor: 'rgba(255,255,255,.7)',
            height: '4px',
            borderLeft: '1px solid black',
            borderRight: '1px solid black'
        },
        'languageHeaderStyle' : {
            fontSize: '48px',
            fontWeight: '600',
            letterSpacing: '2px',
            borderLeft: '4px solid rgba(255,255,255,.7)',
            borderRight: '4px solid rgba(255,255,255,.7)',
            textShadow: '1px 0px 20px white'
        },
        'skillHeaderStyle' : {
            // textDecoration: 'overline rgba(255,255,255,.8)',
            fontSize: '34px',
            textShadow: '1px 1px black',
            color: 'white'
        },
        'aboutMeStyle' : {
            fontSize: '30px',
            fontFamily: "'Aclonica', sans-serif",
            color: 'white',
            textShadow: '1px 0px 14px white',
        }
    }

    const mainAnimation = new Animation

    return (
        <Grid container sx={customStyles.container}>
            <Fade left duration={4000}>
                <div style={customStyles.aboutMeStyle}>
                    ABOUT ME
                </div>
            </Fade>
            <Grid item xs={12} sx={{ padding: '20px', alignContent: 'center'}}>
                <LightSpeed right duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>

            <Grid item sm={1} xs={0}></Grid>
            <Grid item sm={4} xs={12}>
                <Zoom left duration={1600}>
                    <img src={aboutmePic} style={customStyles.imageStyle} />
                </Zoom>
            </Grid>
            <Grid item sm={6} xs={12} sx={{ padding: '20px', textAlign: 'left' }}>
                <Grid container>
                    <Rotate top right duration={1000} delay={500}>
                        <Grid item xs={12} sx={customStyles.headerStyle}>Dillon Michael Lee, thats me! </Grid>
                    </Rotate>
                    <Fade delay={3000}>
                        <Grid item xs={12} sx={customStyles.bodyStyle}>
                        &nbsp;&nbsp;&nbsp;I am a 25 year old full stack developer living in College Station, Texas. It is my hope to secure a position with a well-established corporation or start up where I can further build my career and become a valuable member of a development team. I have spent the last two years as the entire tech department for an international oil distribution company where I wore many hats that have helped me gain the skills needed for full stack developement. 
                        <br/> &nbsp;&nbsp;&nbsp;I understand code on a high level and am able to pick up new languages or SDKs quickly. My stack includes extensive understanding of modern tools and practices such as: React, Node, Express, Object-Oriented-Programing, Redux, Mongo DB, and exposure to many more. I am a great problem solver, team player, and will be happy to self teach any new technologies required for the job. 
                        Another reason I feel I would make a good fit for a development team is because I also have managerial experience with a company that is well known for customer service and a friendly face, H-E-B. This role established great professional and friendly habits like being coachable, communicative, and friendly at all times. I am looking to add communication and technical support to any development team. 
                        </Grid>
                    </Fade>
                </Grid>
            </Grid>
            <Grid item sm={1} xs={0}></Grid>
            
            <Grid item xs={12} sx={{ paddingTop: '10px', alignContent: 'center'}}>
                <LightSpeed left duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>
            <Grid item xs={12} sx={{alignContent: 'center'}}>
                <LightSpeed right duration={3000}>
                    <h1 style={customStyles.languageHeaderStyle}>
                        SKILLS & LANGUAGES   
                    </h1>
                </LightSpeed>
            </Grid>
            <Grid item xs={12} sx={{ paddingBottom: '10px', alignContent: 'center'}}>
                <LightSpeed left duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: '5px' }}>
                <Grid container>
                    {languageSkills.map((each, index)=>{
                        return (
                            <Grid item xs={12} sm={3} sx={{ paddingTop: '10px' }}>
                                <LightSpeed left duration={3000} delay={(index*200)}>
                                    <h2 style={customStyles.skillHeaderStyle}>
                                        {each.name}
                                    </h2>
                                    <img src={each.imagePath} width={200} height={100} style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,.8)' }} />
                                </LightSpeed>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: '50px', alignContent: 'center'}}>
                <LightSpeed right duration={4000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>
        </Grid>
    )
}