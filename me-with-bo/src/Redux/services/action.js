
export const ADDALLSERVICES="ADDALLSERVICES"

export const getservices=(payload)=>({type:ADDALLSERVICES,payload:payload})










export const  getdata=()=>(dispatch)=>{

 
    fetch("http://localhost:1080/service")
    .then((res)=>res.json())
    .then((res)=>{dispatch(getservices(res))})
    .catch((err)=>{console.log(err)})
    




}

export const  getdatawithparams=(param,page)=>(dispatch)=>{

    console.log("yesss")
 
    fetch(`http://localhost:1080/service?serviceparam=${param}&&page=${page}`,{
       method:"GET",
       headers:{
           "Content-Type":"application/json"
       },
       
      
    })
    .then((res)=>res.json())
    .then((res)=>{dispatch(getservices(res))})
    .catch((err)=>{console.log(err)})
    




}
