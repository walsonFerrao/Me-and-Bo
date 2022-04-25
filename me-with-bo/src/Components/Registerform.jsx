
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import { Button } from '@mui/material';



const Wrapper=styled.div`

width:20%;
margin:auto;
background-color:whitesmoke;
padding:100px;



`





export const Register=()=>{

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    




return (


    <Wrapper>

<TextField id="standard-basic" label="name" variant="standard" />
 
 <br />
<br />
 <TextField id="standard-basic" label="email" variant="standard" />

<br />
<br />
<TextField id="standard-basic" label="password" variant="standard" type="password"/>
<br />
<br />
 <TextField id="standard-basic" label="phonenumber" variant="standard" />

<br />
<br />
<TextField id="standard-basic" label="address" variant="standard" type="password"/>
<br />
<br />
        <Button variant="contained">Register</Button>

<br />
<h3>Already have an account <a href="">Login</a></h3>



    </Wrapper>






)





}