
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
import {useNavigate as useNavigation} from 'react-router-dom'



const Wrapper=styled.div`

width:20%;
height:100px;
margin:auto;
background-color:whitesmoke;
padding:100px;



`





export const Login=()=>{

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        email:'',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
 const navigate=useNavigation()


    console.log(values)

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
    
     function storeemail(e)
     {

       setValues({...values,email:e.target.value})
      


     }

function login()
{
  console.log("jjj")

  fetch('http://localhost:1080/login',{ 
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email:values.email,password:values.password})
  })
.then((res)=>res.json())
.then((res)=>{console.log(res);localStorage.setItem("userdetails",JSON.stringify(res));!res.error?navigate("/"):navigate("/login")})
.catch((err)=>{console.log(err)})
}




return (


    <Wrapper>

<FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
         Email id
        </InputLabel>
      
        <Input
        onChange={(e)=>{storeemail(e)}}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
 
 <br />

      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

<br />
<br />
        <Button onClick={login} variant="contained">Login</Button>

<br />
<br />
<h3>Dont have an account <a href="/register">Register</a></h3>



    </Wrapper>






)





}