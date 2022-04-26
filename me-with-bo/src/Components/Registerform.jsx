
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
import { useNavigate } from 'react-router';



const Wrapper=styled.div`

width:20%;
margin:auto;
background-color:whitesmoke;
padding:100px;



`





export const Register=()=>{

    const [email,setemail] =React.useState("")
    const [password,setpassword]=React.useState("")
    const [name,setname]=React.useState("")
    const [phonenumber,setphonenumber]=React.useState("")
    const [address,setaddress]=React.useState("")


const navigate=useNavigate()

    function register()
    {
 console.log({email:email,password:password,name:name,phonenumber:phonenumber,address:address})
    fetch('http://localhost:1080/register',{

     method:"POST",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({email:email,password:password,username:name,phonenumber:phonenumber,address:address})

    })
    .then((res)=>res.json())
    .then((res)=>{console.log(res);!res.errors?navigate("/login"):navigate("/register")})
    .catch((err)=>{console.log(err)})
    }



    
      // const handleChange = (prop) => (event) => {
      //   setValues({ ...values, [prop]: event.target.value });
      // };
    
      // const handleClickShowPassword = () => {
      //   setValues({
      //     ...values,
      //     showPassword: !values.showPassword,
      //   });
      // };
    
      // const handleMouseDownPassword = (event) => {
      //   event.preventDefault();
      // };
    




return (


    <Wrapper>

<TextField id="standard-basic" label="name" variant="standard" onChange={(e)=>{setname(e.target.value)}} />
 
 <br />
<br />
 <TextField id="standard-basic" label="email" variant="standard"  onChange={(e)=>{setemail(e.target.value)}}/>

<br />
<br />
<TextField id="standard-basic" label="password" variant="standard" type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
<br />
<br />
 <TextField id="standard-basic" label="phonenumber" variant="standard" onChange={(e)=>{setphonenumber(e.target.value)}} />

<br />
<br />
<TextField id="standard-basic" label="address" variant="standard"  onChange={(e)=>{setaddress(e.target.value)}} />
<br />
<br />
        <Button variant="contained" onClick={register}>Register</Button>

<br />
<h3>Already have an account <a href="/login">Login</a></h3>



    </Wrapper>






)





}