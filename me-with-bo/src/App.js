import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import {Creationform} from './Components/Creationform'
import {Login} from './Components/Loginform';
import {Register} from './Components/Registerform';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Components/Home'
import {Fulldata} from './Components/Fulldata'
import {Userpage} from './Components/Userprofile';
import {Editform} from './Components/Editform';
import {Adminpage} from './Components/Adminpofile'
import { Outlet } from 'react-router';



function ProtectedRouter()
{

const userdetails=localStorage.getItem("userdetails")


return userdetails?<Outlet/>:<Register/>


}





function App() {
  return (
<div>
<Navbar/>
      <Routes>
  
<Route path='/login' element={ <Login/>} />S
<Route path='/Register' element={ <Register/>} />

<Route  element={ <ProtectedRouter/>} >


<Route path='/' element={<Home/>} />
<Route path='/create' element={<Creationform/>} />
<Route path='/listing/:id' element={ <Fulldata/>} />
<Route path='/user/:id' element={ <Userpage/>} />
<Route path='/user/edit/:id' element={ <Editform/>} />
<Route path='/user/admin/:id' element={ <Adminpage/>} />

</Route>

     
     
    
     
     </Routes>
     </div>
  );
}

export default App;
