import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router';


const pets = [
    {
      value: 'dogs',
      label: 'dogs',
    },
    {
      value: 'cats',
      label: 'cats',
    },
    {
      value: 'rabbits',
      label: 'rabbits',
    },
    {
      value: 'mongoose',
      label: 'mongoose',
    },
    {
        value: 'panas',
        label: 'pandas',
      },
      {
        value: 'mouse',
        label: 'mouse',
      },
      
  ];

  const Sizes = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
        value: '5',
        label: '5',
      },
      {
        value: '6',
        label: '6',
      },
      {
        value: '7',
        label: '7',
      },
      {
        value: '8',
        label: '8',
      },
      {
          value: '9',
          label: '9',
        },
        
  ];





export  function Creationform() {

    const [pet, setpet] = React.useState('dogs');

    const handleChange = (event) => {
      setpet(event.target.value);
    };

    const [initialsize, setinitialsize] = React.useState(1);
    const [finalsize, setfinalsize] = React.useState(1);
const userdetail=localStorage.getItem("userdetails")

    const handlestartsize = (event) => {
        setinitialsize(event.target.value);
    };
    const handleendsize = (event) => {
        setfinalsize(event.target.value);
    };

    function addsubobject()
    {
        console.log(initialsize,finalsize,pet)
        
        useobject({...Object,restrictions:[...Object.restrictions,{initialsize,finalsize,pet}]})
    }


  function deletesubobj(e,i)
  {
      console.log(e,i)
      useobject({...Object,restrictions:Object.restrictions.filter((a,b)=>b!==i)})
  }




 const [Object,useobject]=React.useState({
     firmname:"",
     about:"",
     summary:"",
     services:"",
     cost:"",
    capacity:"",
    city:"",
    address:"",
    phonenumber:"",
    restrictions:[],
    one:"",
    two:"",
    three:"",
    four:"",
    five:"",
    six:"",
    seven:"",
    eight:"",
    user:userdetail.id,
    url:""
 })

const navigate=useNavigate()
// api function to add the details to data base,


function apipost()
{
  Object.user=JSON.parse(localStorage.getItem("userdetails")).id

fetch("http://localhost:1080/service",{
method:"POST",
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify(Object)


})
.then((res)=>res.json())
.then((res)=>{console.log(res);navigate("/create")})
.catch((err)=>{console.log(err)})
}





    
// I am going to write the functions to add changes

function firmname(e)
{
useobject({...Object,firmname:e.target.value})
}
function about(e)
{
useobject({...Object,about:e.target.value})
}
function summary(e)
{
    useobject({...Object,summary:e.taget.value})
}
function services(e)
{
    useobject({...Object,services:e.target.value})
}
function cost(e)
{
    useobject({...Object,cost:e.target.value})
}
function capacity(e)
{
    useobject({...Object,capacity:e.target.value})
}
function city(e)
{
    useobject({...Object,city:e.target.value})
}
function address(e)
{
    useobject({...Object,address:e.target.value})
}
function phonenumber(e)
{
    useobject({...Object,phonenumber:e.target.value})
}

function one(e)
{
    useobject({...Object,one:e.target.value})
}
function two(e)
{
    useobject({...Object,two:e.target.value})
}
function three(e)
{
    useobject({...Object,three:e.target.value})
}
function four(e)
{ 
    useobject({...Object,four:e.target.value})
}
function five(e)
{
    useobject({...Object,five:e.target.value})

}
function six(e)
{
    useobject({...Object,six:e.target.value})

}
function seven(e)
{
    useobject({...Object,seven:e.target.value})

}
function eight(e)
{
    useobject({...Object,eight:e.target.value})

}
function url(e)
{
  useobject({...Object,url:e.target.value})

}

// this is thge end of the functions
console.log(Object)

  return (
   <div style={{width:"80%",paddingTop:"10px",border:"1px solid black",margin:"auto",marginTop:"30px",backgroundColor:'#f4efef',paddingBottom:"25px",marginBottom:"25px",textAlign:"center"}}>

     <h1>Fill the form to let the customers know about your service</h1>
<br />

<div style={{width:"100%",display:"flex",gap:"35px",justifyContent:'center'}}>
        <TextField
          id="outlined-multiline-flexible"
          label="firm name"
          multiline
          maxRows={4}
          onChange={(e)=>{firmname(e)}}
        />

<TextField
          id="outlined-textarea"
          label="about pethome"
          placeholder="about"
          onChange={(e)=>{about(e)}}
          multiline
        />

<TextField
          id="outlined-textarea"
          label="summary of pethome"
          placeholder="about"
          onChange={(e)=>{summary(e)}}
          disabled={true}
          multiline
        />

</div>
<br />

<div style={{width:"75%",display:"flex",gap:"20px",marginLeft:'13%',justifyContent:'center'}}>

<div>
<TextField
          id="standard-textarea"
          label="serviced provided"
          placeholder="eg: pet swimmingpool"
          multiline
                    onChange={(e)=>{services(e)}}

          variant="outlined"
        />
</div>

<div>
<TextField
         type='number'
          id="standard-textarea"
          label="cost per day"
          placeholder="eg:1000rs"
          onChange={(e)=>{cost(e)}}

          variant="outlined"
        />
</div>

<div style={{display:'flex',alignItems:'center'}}>
<TextField
          id="filled-password-input"
          label="Capacity of pets"
          type="Number"
          variant="outlined"
          onChange={(e)=>{capacity(e)}}

          placeholder='Number, eg:5,50'
        />
</div>


</div>

<br />


<div style={{width:"75%",display:"flex",gap:"35px",marginLeft:'13%',justifyContent:"center"}}>

<div>
<TextField
          id="standard-textarea"
          label="city"
          placeholder="eg:mangalore"
          multiline
          onChange={(e)=>{city(e)}}

          variant="outlined"
        />
</div>

<div>
<TextField
          id="standard-textarea"
          label="address of your firm"
          placeholder="eg:adress"
          variant="outlined"
          multiline
          onChange={(e)=>{address(e)}}

        />
</div>

<div>
<TextField
          id="standard-textarea"
          label="Phone number"
          placeholder="eg:984442255"
          variant="outlined"
          type="number"
          onChange={(e)=>{phonenumber(e)}}

          multiline
        />
</div>


</div>

<h3>restrictions</h3>


<div style={{display:"flex",justifyContent:'space-evenly'}}>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={pet}
          onChange={handleChange}
          helperText="Please select  pet"
        >
          {pets.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <TextField
    id="standard-select-currency"
    select
    label="Select"
    value={initialsize}
    onChange={handlestartsize}
    helperText="please select size"
  >
    {Sizes.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>



  <TextField
    id="standard-select-currency"
    select
    label="Select"
    value={finalsize}
    onChange={handleendsize}
    helperText="please select size"
  >
    {Sizes.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>

  <Button  variant="outlined" onClick={(e)=>{addsubobject(e)}}>ADD</Button>
 


</div>



<div>



</div>
<div style={{display:"100%"}}>
{Object.restrictions?.map((e,i)=><div e={e} i={i} style={{display:"flex",width:"max-content",gap:"30px",justifyContent:"center",backgroundColor:"gray",margin:'auto',marginTop:"10px"}}><div>{e.pet}</div><div>{e.initialsize}</div><div>{e.finalsize}</div><button onClick={()=>{deletesubobj(e,i)}}>Delete</button></div> )}
</div>
{/* qeustions */}
<div style={{width:"70%",marginLeft:"10%"}}>
<h3>describe thsese questions for better cutomer undestanding about your service</h3>

<div >

<FormControl fullWidth sx={{ m: 3 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Level of adult supervision.</InputLabel>
          <Input
            id="standard-adornment-amount"
            // onChange={('amount')}
            placeholder='eg: Pets will never be left unattended'
            onChange={(e)=>{one(e)}}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>


        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">The place your pet will be if they are left unsupervised at home.</InputLabel>
          <Input
            id="standard-adornment-amount"
            onChange={(e)=>{two(e)}}
            placeholder='eg: Free roam of the house'
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">The place your pet will sleep at night.</InputLabel>
          <Input
            id="standard-adornment-amount"
            // onChange={('amount')}
            placeholder='eg: Wherever they want '
            onChange={(e)=>{three(e)}}

            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">The number of potty breaks provided per day</InputLabel>
          <Input
            id="standard-adornment-amount"
            // onChange={('amount')}
            onChange={(e)=>{four(e)}}

            placeholder='eg: Full access outside'
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>


        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">The number of walks provided per day.</InputLabel>
          <Input
            id="standard-adornment-amount"
            // onChange={('amount')}
            onChange={(e)=>{five(e)}}

            placeholder='eg: 25'
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">The type of home I stay in..</InputLabel>
          <Input
            id="standard-adornment-amount"
            // onChange={('amount')}
            placeholder='Home'
            onChange={(e)=>{six(e)}}

            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Image url of the pethouse</InputLabel>
          <Input
            id="standard-adornment-amount"
            // onChange={('amount')}
            placeholder='URL'
            onChange={(e)=>{url(e)}}

            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>





        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">My outdoor area size.</InputLabel>
          <Input
                      onChange={(e)=>{seven(e)}}

            id="standard-adornment-amount"
            // onChange={('amount')}
            placeholder='10yards'
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
                  </FormControl>


<FormControl fullWidth sx={{ m: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Emergency transport.</InputLabel>
          <Input
            id="standard-adornment-amount"
            onChange={(e)=>{eight(e)}}

            // onChange={('amount')}
            placeholder='Yes/No/others'
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />


        </FormControl>



</div>


</div>
<br />
<Button variant="contained" size="large" onClick={apipost}>Submit It</Button>

</div>

  );
}



 