import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"



const Containerdiv=styled.div`
background-color:gray;

width:50%;
padding:10px;
padding-left:35px;
margin:auto;
margin-top:30px;
margin-bottom:25px;
border-radius:10px;

`

export const Adminpage=()=>{

    const[page,setpage]=useState(0)

const userdetails=JSON.parse(localStorage.getItem("userdetails"))
const navigate=useNavigate()

const [service,setservice]=useState([])
console.log(service)

 function getdata()
 {

fetch(`http://localhost:1080/service?page=${page}`)
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

function Changestatus(id)
{
   
    fetch(`http://localhost:1080/service/user/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then((res)=>res.json())
    .then((res)=>{console.log("ok thank you");getdata()})

}


useEffect(getdata,[page])



return(


<>

<div style={{fontSize:"30px",marginTop:"10px",marginLeft:"20px",display:"flex",justifyContent:"center",gap:"35px"}}>

<div> <span style={{fontFamily:"fantasy"}}>AdminsEmail:</span> {userdetails.email}</div>
<div> <span style={{fontFamily:"fantasy"}}>AdminsAddress:</span>{userdetails.address}</div>
<div><span style={{fontFamily:"fantasy"}}>AdminsNumber:</span>{userdetails.phonenumber}</div>
</div>

{service.map((e)=><Containerdiv>
<div style={{float:"right"}}>
<button onClick={()=>{gotoeditpage(e._id)}}>Edit</button>
<button onClick={()=>{deletedata(e._id)}}>Delete</button>
<button onClick={()=>{Changestatus(e._id)}}>Changestatus</button>

</div>
<div>about:{e.about}</div>
<div>city:{e.city}</div>
<div>phonenumber:{e.phonenumber}</div>
<div>firstname:{e.firmname}</div>
<div style={{ width:"7%",fontSize:"25px"}}>status:{e.status}</div>


</Containerdiv>)}


<div style={{display:"flex",justifyContent:"space-between",marginBottom:"25px"}}>
<button style={{backgroundColor:"grey",width:'10%',textAlign:"center",height:"30px",marginLeft:"10%",marginRight:"10%",borderRadius:"8px"}} onClick={()=>{page!=0?setpage(page-1):console.log("pagelimit")}}>Prev</button>
<button>{page+1}</button>
<button style={{backgroundColor:"grey",width:'10%',textAlign:"center",height:"30px",marginLeft:"10%",marginRight:"10%",borderRadius:"8px"}} onClick={()=>{setpage(page+1)}}>Next</button>

</div>

</>





)




}