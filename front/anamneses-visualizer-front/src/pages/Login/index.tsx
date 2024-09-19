import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useQuery } from 'react-query';
import { URL_API, API_KEY } from '../../../config';
import { CircularProgress, Alert } from '@mui/material';
import { useAuth } from '../../providers/AuthContext';


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/lisperey?tab=repositories">
                Filipe Rosa
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn() {
    const { setToken } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
 
    const { isLoading, refetch } = useQuery(
        "pacientes",
        () => {
          return axios.post(`${URL_API}/login`,
            { username: username, password: password } ,
            { headers: { 'api-key': API_KEY }}).then((response) => response.data);
        },
        {
            enabled: false,
            onSuccess: (res) => {
                if(!res.error){
                    setToken(res?.data?.token)
                    navigate(`/`)
                }
                else{
                    setShowAlert(true);
                    setTimeout(() => {
                    setShowAlert(false);
                    }, 3000);
                }
            },
            onError: () => {
                setShowAlert(true);
                setTimeout(() => {
                setShowAlert(false);
                }, 3000);
            }
        }
      );
    const haddleLogin = () =>{
        refetch()  
    };

    if (isLoading) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <CircularProgress size={65} />
          </div>
        );
      }

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {showAlert && (
            <Alert variant="filled" severity="error">
              Error ao logar!
            </Alert>
          )}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                    Login
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={haddleLogin}
                        >
                            Entrar
                        </Button>
                    </Box>
                </Box>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </Box>
    );
}