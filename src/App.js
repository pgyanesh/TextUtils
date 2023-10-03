
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light')
 const[alert,setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black'
    showAlert("Dark Mode has been enabled", "success")
   }else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled", "success")
   }
  }
  return (
   <>
    
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   <Textform showAlert={showAlert} heading = "Enter your text here" mode={mode}/>
   </div>
  
   
   </>
  );
}

export default App;
