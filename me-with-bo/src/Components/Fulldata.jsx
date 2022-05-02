import * as React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';




const Namecontainer=styled.div`



`


  

export  function Fulldata() {


const {id}= useParams()

console.log(id)

React.useEffect(function()
{
 fetch(`http://localhost:1080/service/${id}`)
 .then((res)=>{console.log(res)})
 .catch((err)=>{console.log(err)})
},[])



return (
<div>

<div>
  Firmname
</div>

<div>
  about
</div>

<div style={{display:"flex",gap:"25px"}}>
  specs
  <div>  summary</div>
  <div>services</div>
  <div>cost</div>
  <div>capacity</div>
</div>

<div style={{display:"flex",gap:"25px"}}>
  xx
  <div>city</div>
  <div>address</div>
  <div>status</div>
  <div>phone umber</div>
</div>
<div>restrictions</div>

<div>
  QandA
</div>


</div>

  )
}
