import React, { useState, useEffect } from 'react';
import { Avatar,Button, Grid, Paper, TextField, Typography} from '@mui/material';
import Layout from '../../Components/Layout'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Axios from 'axios'


const Signin = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(errors).length === 0 && validated) {
            console.log(inputs);
            navigate('/')
        }
        // eslint-disable-next-line
    }, [errors])




    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(errors)
        setErrors(validate(inputs));
        setValidated(true);
        // setInputs({email:'',password:""})        
    }



    const validate = (values) => {
        const req = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            req.email = "Please enter the email"
        } else if (!regex.test(values.email)) {
            req.email = "Not a valid email"
        }
        if (!values.password) {
            req.password = "Password is required"
        } else if (values.password.length < 6 || values.password.length > 10) {
            req.password = "Not a valid password"
        }
        return req;
    }

    const handelInputs = (e) => {
        setInputs((prevstate) => ({
            ...prevstate, [e.target.name]: e.target.value
        }))
    }





    const papperStyle = { padding: '80px 40px', width: '60%', maxWidth: '400px', margin: '10px auto', marginBottom: '20px' }
    return <>
        <Layout >
            <Grid mt={'7vh'}>
                <Paper elevation={20} style={{ ...papperStyle }}>
                    <Grid align="center" >
                        <Avatar sx={{ bgcolor: "#1bbd7e", width: 56, height: 56 }} >
                            <LoginRoundedIcon />
                        </Avatar>
                        <Typography variant='h4' component='h2'>Sign In</Typography>
                        <Typography variant='caption' >Login Here</Typography>
                    </Grid>
                    <form noValidate onSubmit={handelSubmit} >
                        <Box display='flex' gap={1} flexDirection="column">
                            <TextField variant='standard' required fullWidth autoComplete="off"
                                name='email'
                                onChange={handelInputs}
                                label="Email"></TextField>
                            {(errors.email || !inputs.email) && <Typography variant='caption' color='red'>{errors.email}</Typography>}
                            <TextField variant='standard' required fullWidth autoComplete="off" name='password'
                                onChange={handelInputs}
                                label="Password"></TextField>
                            {errors.password && (!inputs.password) && <Typography variant='caption' color='red'>{errors.password}</Typography>}

                            <Button type='submit' variant='contained' >Sign Up</Button>
                        </Box>
                    </form>
                    <Box display='flex' flexDirection="column" textAlign="center" gap={1} >
                        <Typography variant='body2' mt={1} color='tertiary'>Don't have an account ?<Link to='/signup' style={{ textDecoration: 'none' }}>sign Up</Link></Typography>
                    </Box>
                </Paper>
            </Grid>
        </Layout>
    </>
}

export default Signin