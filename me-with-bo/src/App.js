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
function App() {
  return (
<div>
<Navbar/>
      <Routes>
  <Route path='/' element={<Home/>} />
<Route path='/create' element={<Creationform/>} />
<Route path='/login' element={ <Login/>} />
<Route path='/Register' element={ <Register/>} />
<Route path='/listing/:id' element={ <Fulldata/>} />
<Route path='/user/:id' element={ <Userpage/>} />

     
     
    
     
     </Routes>
     </div>
  );
}

export default App;
