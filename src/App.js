import React from 'react'
import Login from './megbiya/Login';
import SignUp from './megbiya/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Crud from './Crud';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route  />
<Route path='/' element={<Login></Login>}/>
<Route path='/signup' element={<SignUp></SignUp>}/>
<Route path='/crud' element={<Crud></Crud>}/>

</Routes>


</BrowserRouter>

    
  )
}

export default App


