


export const Userpage=()=>{

const userdetails=JSON.parse(localStorage.getItem("userdetails"))

return(


<>

<div>

<div>{userdetails.email}</div>
<div>{userdetails.address}</div>
<div>{userdetails.phonenumber}</div>
</div>
<div>
service status
</div>


</>





)




}