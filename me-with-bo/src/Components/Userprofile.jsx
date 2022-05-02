import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"



const Containerdiv=styled.div`
background-color:gray;
margin-top:30px;
margin-bottom:25px;

padding:10px;
padding-left:35px;


`

export const Userpage=()=>{

const userdetails=JSON.parse(localStorage.getItem("userdetails"))
const navigate=useNavigate()

const [service,setservice]=useState([])
console.log(service)

 function getdata()
 {

fetch(`http://localhost:1080/service/user/${userdetails.id}`)
.then((res)=>res.json())
.then((res)=>{setservice([...res])})
.catch((err)=>{console.log(err)})



}

function  deletedata(id)
{
    console.log(id,"id")
    fetch(`http://localhost:1080/service/user/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then((res)=>res.json())
    .then((res)=>{console.log("ok thank you");getdata()})
    .catch((err)=>{console.log(err)})
    
    


}

function gotoeditpage(id)
{

    navigate(`/user/edit/${id}`)

    
}


useEffect(getdata,[])



return(


<>

<div style={{fontSize:"30px",marginTop:"10px",marginLeft:"20px"}}>

<div>{userdetails.email}</div>
<div>{userdetails.address}</div>
<div>{userdetails.phonenumber}</div>
</div>

{service.map((e)=><Containerdiv>
<div style={{float:"right"}}>
<button onClick={()=>{gotoeditpage(e._id)}}>Edit</button>
<button onClick={()=>{deletedata(e._id)}}>Delete</button>

</div>
<div>about:{e.about}</div>
<div>city:{e.city}</div>
<div>phonenumber:{e.phonenumber}</div>
<div>firstname:{e.firmname}</div>
<div>status:{e.status}</div>


</Containerdiv>)}


</>





)




}