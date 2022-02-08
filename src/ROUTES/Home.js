import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Home() {

    const customStyles = {
        'container' : {
            padding: '10px'
        },
        'mainSection' : {
            height: '400px',
            paddingLeft: '50px',
            paddingRight: '50px'

        },
        'header' : {
            fontSize: window.screen.width > 400 ? '144px' : '72px',
            fontWeight: '700',
            letterSpacing: '10px',
            fontFamily: "'Aclonica', sans-serif",
            textAlign: 'left',
            color: 'rgba(255,255,255,.8)',
            textShadow: '1px 0px 14px white'
        }
    }

    const mainAnimation = new Animation

    return (
        <Grid container sx={customStyles.container}>
            <Grid item xs={12} sx={customStyles.mainSection}>
                <LightSpeed duration={5000} delay={800} >
                    <h1 style={customStyles.header}>
                        Dillon Lee
                    </h1>
                </LightSpeed>
            </Grid>
        </Grid>
    )
}
