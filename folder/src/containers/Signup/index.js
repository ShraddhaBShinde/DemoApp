import Layout from '../../Components/Layout'
import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Checkbox, FormGroup, Grid, Paper, TextField, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';









const Signup = () => {

    const handelChange = (e) => {
        setInputs((prevState) => ({
            ...prevState, [e.target.name]: e.target.value, isPermenant: e.target.checked
        }))
    }
    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        isPermenant: false,
        gender: '',

    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(inputs);
        }
        // eslint-disable-next-line
    }, [errors])



    const handelSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(inputs));
        setisSubmit(true);
    }


    const validate = (values) => {
        const notFill = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fname) {
            notFill.fname = "First Name is required"
        } else if (values.fname.length < 2) {
            notFill.fname = "Name cannot be less than 2 characters"
        }
        if (!values.lname) {
            notFill.lname = "Last Name is required"
        }
        if (!values.email) {
            notFill.email = "Email is required"
        } else if (!regex.test(inputs.email)) {
            notFill.email = "Enter valid email"
        }
        if (!values.password) {
            notFill.password = "Password is required"
        } else if (values.password.length < 6) {
            notFill.password = "Enter strong password (6 digits)"
        } else if (values.password.length > 10) {
            notFill.password = "Password cannot be grater than 10 character"
        }
        if (values.password !== values.confirmPassword) {
            notFill.confirmPassword = "Password and confirm password does not match"
        }
        if (!values.gender) {
            notFill.gender = "Please select the gender"
        }
        if (!values.contactNumber) {
            notFill.contactNumber = "Please enter contact number"
        } else if (values.contactNumber.length < 10 || values.contactNumber.length > 10) {
            notFill.contactNumber = "Not a valid mobile number"
        }


        return notFill;
    }



    // const navigate = useNavigate();
    // console.log(inputs);

    const papperStyle = { padding: '20px 40px', maxWidth: '400px' ,margin: '0px auto', marginBottom: '20px' }
    return <>
        <Layout>
            <Grid mt={'6vh'} >
                <Paper elevation={20} style={{ ...papperStyle, width: '60%' }}>
                    <Grid align="center">
                        <Avatar sx={{ bgcolor: "#1bbd7e", width: 56, height: 56 }} >
                            <PersonAddIcon />
                        </Avatar>
                        <Typography variant='h4' component='h2'>Sign Up</Typography>
                        <Typography variant='caption'>Registere Here</Typography>
                    </Grid>
                    <form noValidate onSubmit={handelSubmit}>
                        <Box display='flex' gap={0.7} flexDirection='column'  >

                            <TextField variant='standard' value={inputs.fname} name="fname" onChange={handelChange}
                                required  autoComplete="off" label="First Name"></TextField>
                            {(errors.fname && (!inputs.fname || inputs.fname.length < 2)) && <Typography variant='caption' color='red'>{errors.fname}</Typography>}


                            <TextField variant='standard' value={inputs.lname} name="lname" onChange={handelChange}
                                required fullWidth autoComplete="off" label="Last Name"></TextField>
                            {(errors.lname && (!inputs.lname || inputs.lname.length < 2)) && <Typography variant='caption' color='red'>{errors.lname}</Typography>}


                            <TextField variant='standard' value={inputs.email} name="email" onChange={handelChange}
                                required fullWidth autoComplete="off" label="Email"></TextField>
                            {(errors.email && !inputs.email) && <Typography variant='caption' color='red'>{errors.email}</Typography>}


                            <FormControl>
                                <FormLabel required id="demo-radio-buttons-group-label" >Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="gender"
                                    style={{ margin: 0 }}
                                    onChange={handelChange}
                                    value={inputs.gender}
                                    sx={{ display: "initial", }}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                                {(errors.gender && !inputs.gender) && <Typography variant='caption' color='red'>{errors.gender}</Typography>}
                            </FormControl>

                            <TextField variant='standard' value={inputs.contactNumber} name="contactNumber" onChange={handelChange}
                                type='number' required fullWidth autoComplete="off" label="Contact number"></TextField>
                            {(errors.contactNumber && (!inputs.contactNumber || inputs.contactNumber.length < 10 || inputs.contactNumber.length > 10)) && <Typography variant='caption' color='red'>{errors.contactNumber}</Typography>}

                            <TextField variant='standard' value={inputs.password} name="password" onChange={handelChange}
                                required fullWidth autoComplete="off" label="Password"></TextField>
                            {(errors.password && (!inputs.password || (inputs.password.length < 6 || inputs.password.length > 10))) && <Typography variant='caption' color='red'> {errors.password}</Typography>}


                            <TextField variant='standard' value={inputs.confirmPassword} name="confirmPassword" onChange={handelChange}
                                required fullWidth autoComplete="off" label="Confrim Password"></TextField>
                            {(errors.confirmPassword && (!inputs.confirmPassword || inputs.confirmPassword!==inputs.password)) && <Typography variant='caption' color='red'>{errors.confirmPassword}</Typography>}


                            <FormGroup>
                                <FormControlLabel control={<Checkbox name='isPermenant' onChange={handelChange} value={inputs.isPermenant}
                                    color='secondary' />} label="Permenant admin" />
                            </FormGroup>


                            <Button type='submit' onSubmit={handelSubmit} variant='contained' >Sign Up</Button>



                            <Box display='flex' textAlign='center' flexDirection='column'>
                                <Typography variant='body2' color='primary'>Already have account ?<Link to='/signin' style={{ textDecoration: 'none' }}>Login here</Link></Typography>
                            </Box>


                        </Box>
                    </form>
                </Paper>
            </Grid>

        </Layout>
    </>
}



export default Signup;