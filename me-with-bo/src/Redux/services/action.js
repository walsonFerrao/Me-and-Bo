
export const ADDALLSERVICES="ADDALLSERVICES"

export const getservices=(payload)=>({type:ADDALLSERVICES,payload:payload})










export const  getdata=()=>(dispatch)=>{

 
    fetch("http://localhost:1080/service")
    .then((res)=>res.json())
    .then((res)=>{dispatch(getservices(res))})
    .catch((err)=>{console.log(err)})
    




}