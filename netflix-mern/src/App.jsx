import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Netflix from './pages/Netflix';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/' element={<Netflix />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App