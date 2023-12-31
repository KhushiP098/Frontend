import React,{ useEffect,useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import {Routes,Route} from 'react-router-dom'


const App=()=>{
  return(
  <div className="flex w-100vw h-100vh m-1  ">
     
     <Sidebar/>  

     
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        
      </Routes>
      

   </div>
  )
}

export default App;