import React,{ useState } from 'react';
import './App.css';
// import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{ 
    setAlert({  
    msg:message,
    type:type
  }) 
}

const removeBodyClasses=(()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');

})

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
   

    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#02084c';
      showAlert("DarkMode Enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode Enabled","success");
    }
 
   
  }

  return (
    <>
   <Router>
   <Navbar  title="TextUtils"  mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
    <Alert alert={alert} />
    <div className="container">

    <Routes>
    <Route exact path="/about" element={ <About mode={mode} />} />
    <Route exact path="/" element={ <Textform heading="Try textUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode} showAlert={showAlert}  />} />
    
  
   
  </Routes>
   
    </div>
   </Router>
   
    </>
 
  );
}

export default App;
