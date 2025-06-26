
import './App.css';
import Alert from './Components/Alert';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'; 
// import { Route, Routes, NavLink, Link } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'  

function App() {
  const [mode, setmode] = useState('light')
  const changemode=()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#151618'
      document.body.style.color='white'
      showAlert("dark mode has been unabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode has been unabled","success")
    }
  }
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
        setalert(null)
    }, 1500);
  }

   return (
    // <Router>
    <>
      <Navbar mode={mode} changemode={changemode} />
      <div className="container">
        <Alert alert={alert} />
        <Form heading="ENTER YOUR TEXT BELOW" mode={mode} showAlert={showAlert} />
        {/* <Routes> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/" element={<Form heading="ENTER YOUR TEXT BELOW" mode={mode} showAlert={showAlert} />} /> */}
        {/* </Routes> */}
      </div>
      <Footer />
    {/*  </Router> */}
    </>
  );
}

export default App;
