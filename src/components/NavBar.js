import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function NavBar(props) {

    const customStyles = {
        root: {
            flexGrow: 1,
          },
          navBar: {
            textAlign: 'center',
            height: '50px',
            paddingTop: '10px',
            color: 'white',
            fontSize: '18px',
            textShadow: '1px 1px 1px rgb(0,0,0)',
            fontWeight: 700,
            letterSpacing: '3px'
          }
    }
    const [navColor, setNavColor] = useState('rgba(255,255,255,.0)');
    const [hoveredOver, setHoveredOver] = useState('none')

    useEffect(()=>{
        window.onscroll = function() {
          if(window.pageYOffset < 100) {
            setNavColor('rgba(255,255,255,.0)')
          }
          else{
              setNavColor('rgba(0,0,0,.4)')
          }
        };
      })

    return (
        <div className={customStyles.root}>
            <Grid container spacing={0} sx={customStyles.navBar} style={{ backgroundColor: navColor }}>
                <Grid item xs={1} style={{ paddingLeft: '5px', textAlign: 'left', letterSpacing: '4px' }}>
                     
                </Grid>
                <Grid item xs={2} onMouseEnter={()=>setHoveredOver('webDesign')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'right', paddingTop: hoveredOver == 'webDesign' ? '12px' : '0px' }}>
                     Home
                </Grid>
                <Grid item xs={2} onMouseEnter={()=>setHoveredOver('marketing')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'center', paddingTop: hoveredOver == 'marketing' ? '12px' : '0px' }}>
                     Projects
                </Grid>
                <Grid item xs={2} onMouseEnter={()=>setHoveredOver('about')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'center', paddingTop: hoveredOver == 'about' ? '12px' : '0px' }}>
                     About Me
                </Grid>
                <Grid item xs={2} onMouseEnter={()=>setHoveredOver('resume')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'left', paddingTop: hoveredOver == 'resume' ? '12px' : '0px' }}>
                     Resume
                </Grid>
                <Grid item xs={3}>
                     
                </Grid>
            </Grid>
  
    </div>
  );
}