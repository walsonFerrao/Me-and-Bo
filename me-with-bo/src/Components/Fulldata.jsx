import * as React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';




const Headpara=styled.p`
font-size:25px;

font-weight:bold;
`
const Answer=styled.p`
font-size:20px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

  const QANDA=styled.div`
  background-color:grey;
  padding:20px;
  margin:10px;
  border-radius:10px;
 
  `

export  function Fulldata() {

const [data,setdata]=React.useState({})
const {id}= useParams()

console.log(id)

React.useEffect(function()
{
 fetch(`http://localhost:1080/service/${id}`)
 .then((res)=>res.json())
 .then((res)=>{setdata({...res})})
 .catch((err)=>{console.log(err)})
},[])



return (

<>
<div style={{width:"100%",display:"flex",alignSelf:"center",marginTop:"25px"}}>
  <img src={data.url} style={{margin:"auto"}}  alt="" />
</div>

<div style={{display:"flex",width:"100%",justifyContent:"center"}}>


<div>

<QANDA>
 <Headpara>CompanyName:</Headpara><Answer>{data.firmname}</Answer>
</QANDA>

<QANDA>
<Headpara>About:</Headpara><Answer>{data.about}</Answer> 
</QANDA>

<div style={{gap:"25px"}}>
  
  {/* <div> <Headpara>Summary</Headpara> <Answer>{data.summary}</Answer></div> */}
  <QANDA><Headpara>services</Headpara>{data.services?data.services.map((e)=><div><Answer>{e}</Answer></div> ):""}</QANDA>
  <QANDA><Headpara>Cost:</Headpara><Answer>{data.cost}</Answer></QANDA>
  <QANDA><Headpara>Capacity:</Headpara><Answer>{data.capacity}</Answer></QANDA>
</div>

<div style={{gap:"25px"}}>

<div style={{gap:"25px",display:"flex",backgroundColor:"gray",padding:"25px",borderRadius:"10px",marginTop:"10px"}}>
<div><Headpara>City:</Headpara><Answer>{data.city}</Answer></div>
  <div><Headpara>Address:</Headpara><Answer>{data.address}</Answer></div>
</div>

<div style={{gap:"25px",display:"flex",backgroundColor:"gray",padding:"25px",borderRadius:"10px",marginTop:"10px"}}>
<div><Headpara>Status:</Headpara><Answer>{data.status}</Answer></div>
  <div><Headpara>Phone:</Headpara><Answer>{data.phonenumber}</Answer></div>
</div>
  
  
</div>
<div>{data?.restrictions?.initialsize}</div>

</div>



<div>
  <QANDA><Headpara>Level of adult supervision</Headpara><Answer>{data.one}</Answer> </QANDA>
  <QANDA><Headpara>The place your pet will be if they are left unsupervised at home.</Headpara><Answer>{data.two}</Answer></QANDA>
  <QANDA><Headpara>The place your pet will sleep at night.</Headpara><Answer>{data.three}</Answer></QANDA>
  <QANDA><Headpara>The number of potty breaks provided per day</Headpara><Answer>{data.four}</Answer></QANDA>
  <QANDA><Headpara>The number of walks provided per day.</Headpara><Answer>{data.five}</Answer></QANDA>
  <QANDA><Headpara>The type of home I stay in..</Headpara><Answer>{data.six}</Answer></QANDA>
  <QANDA><Headpara>My outdoor area size.</Headpara><Answer>{data.seven}</Answer></QANDA>
  <QANDA><Headpara>Emergency transport..</Headpara><Answer>{data.eight}</Answer></QANDA>
</div>


</div>
</>
  )
}
