// import './App.css'
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import MainLayout from './components/MainLayout';
// import Login from './components/Login';
// import Registration from './components/Registration';
// import Dashboard from './components/Dashboard';
// import { useState } from 'react';
// import movies from './components/Movies';
// import map from './components/Map';

// function App() {
//   // const  [store, setStore] =useState("");
//   return (
//     <>
//     <div>
//       {/* {JSON.stringify(store)}
//       <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<MainLayout/>}>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/registration" element={<Registration regData={setStore}/>}/>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//         </Route>

//       </Routes>
//       </BrowserRouter> */}
//       <Map/>

//     </div>
  
//     </>
//   )
// }

// export default App
import React from 'react'
import Map from './components/Map.jsx'

function App() {
  return (
    <div><Map/></div>
  )
}

export default App