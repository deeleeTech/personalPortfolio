import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

import happyBasketball from '../__images/happyBasketball.jpg'

import languageSkills from '../__data/Skills.js'

export default function Home() {

    const customStyles = {
        'container' : {
            padding: '10px',
            paddingTop: '90px'
        },
        'imageStyle' : {
            backgroundImage: `url(${happyBasketball})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '400px',
            width: '100%',
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
        }
    }

    const mainAnimation = new Animation

    return (
        <Grid container sx={customStyles.container}>
            <Grid item xs={12} sx={{ padding: '20px', alignContent: 'center'}}>
                <LightSpeed right duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Zoom left duration={1600}>
                    <img src={happyBasketball} style={customStyles.imageStyle} />
                </Zoom>
            </Grid>
            <Grid item xs={6} sx={{ padding: '20px', textAlign: 'left' }}>
                <Grid container>
                    <Rotate top right duration={1000} delay={500}>
                        <Grid item xs={12} sx={customStyles.headerStyle}>Dillon Michael Lee, thats me! </Grid>
                    </Rotate>
                    <Fade delay={3000}>
                        <Grid item xs={12} sx={customStyles.bodyStyle}>
                        &nbsp;&nbsp;&nbsp;I am a 25 year old full stack developer living in College Station, Texas. My main life goals are to make my mom proud and to ignite generational financial security for my sisters and their kids... if I never have any of my own :)<br />
                        &nbsp;&nbsp;&nbsp; Coding has been an 8 year hobby and a 2 year career... At the start of 2020, covid, finances, and the untimely death of my role model, Kobe Bryant, combined to create an urgency in myself to start my career with the skills I had. Renting my friends old dusty ASUS laptop, I decided to forgo the rest of that junior year of college and began preparing for a entry level software posistions.
                        Soon after, I began contract work as the onsite IT department, and after refactoring the code of some existing software projects, I landed a salary with an International Oil Company with no IT team. It was an amazing and challenging experience with a rapid learning enviorment, but I now find myself looking for a team of coders to form 
                        friends and coworkers doing the same and similar tasks as me.
                        </Grid>
                    </Fade>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ padding: '20px', alignContent: 'center'}}>
                <LightSpeed left duration={3000}>
                    <div style={customStyles.spacerStyle}/>
                </LightSpeed>
            </Grid>
            <Grid item xs={12}>
                <img src={'/images/javascriptlogo.png'} height={50} width={50} />
            </Grid>
        </Grid>
    )
}