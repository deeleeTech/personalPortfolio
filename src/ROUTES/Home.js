import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'

export default function Home() {

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
            paddingTop: '60px',
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
        }
    }

    const mainAnimation = new Animation

    return (
        <Grid container sx={customStyles.container}>
            <Grid item sm={9} xs={12} sx={customStyles.mainSection}>
                <Bounce left duration={2600}>
                    <h1 style={customStyles.header}>
                        Dillon Lee
                    </h1>
                </Bounce>
            </Grid>
            <Grid item sm={3} xs={12} sx={customStyles.sideSection}>
                <Slide right cascade delay={1600} duration={3000}>
                    <div>
                        <h2>Developer</h2>
                        <h2>Entrepreneur</h2>
                        <h2>Adventurer</h2>
                    </div>
                </Slide>
            </Grid>
        </Grid>
    )
}
