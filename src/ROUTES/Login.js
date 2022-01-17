import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../useAuth'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, TextField } from '@mui/material';


export default function Login(props) {

    const customStyles = {
        'containerStyle': { 
            textAlign: 'center',
            paddingTop: '80px'
        },
        'loginStyle': {
            backgroundColor: 'white',
            borderRadius: '4px',
            border: '3px solid black'
        },
        'headerStyle' : {
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            letterSpacing: '3px',
            fontSize: '28px',
            fontWeight: '700'
        },
        'titleStyle': {
            fontSize: '20px',
            fontWeight: '700',
            padding: '10px'
        },
        'buttonStyle': {
            fontWeight: '600',
            border: '1px solid black',
            borderRadius: '15px',
            color: 'black',
            width: '100%'
        }
    }

    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();

    const [ typedUsername, setTypedUsername ] = useState('')
    const [ typedPassword, setTypedPassword ] = useState('')

    const handleUsernameChange = (event) => {
        setTypedUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setTypedPassword(event.target.value);
    };

    const handleLogin = () => {
        
    };

    return (
        <Grid container sx={customStyles.containerStyle}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} sx={customStyles.loginStyle}>
                  <Grid container>
                      <Grid item xs={12} sx={customStyles.headerStyle}>
                            LOGIN
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                        <TextField
                            fullWidth
                            id="outlined-name"
                            label="Username"
                            value={typedUsername}
                            onChange={handleUsernameChange}
                            />
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                        <TextField
                            fullWidth
                            id="outlined-name"
                            label="Password"
                            value={typedPassword}
                            onChange={handlePasswordChange}
                            />
                      </Grid>
                      <Grid item xs={8}>

                      </Grid>
                      <Grid item xs={4}>
                            <button sx={{ width: '100%', fontSize: '8px' }}>
                                Forgot?
                            </button>
                      </Grid>
                      <Grid item xs={12} sx={customStyles.titleStyle}>
                          <Button onClick={handleLogin} sx={customStyles.buttonStyle}>
                                submit
                          </Button>
                          <div style={{ height: '8px', width: '100%' }}></div>
                          <Button onClick={()=>navigate('/signup')} sx={customStyles.buttonStyle}>
                                new account?
                          </Button>
                      </Grid>
                  </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
  );
}
