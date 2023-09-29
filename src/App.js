
import { useState } from 'react';
import './App.css';
/*import About from './components/About';*/
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black'
   }else{
    setMode('light')
    document.body.style.backgroundColor='white'
   }
  }
  return (
   <>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <div className='container my-3'>
    {/*<About/>*/}
   <Textform heading = "Enter your text here" mode={mode}/>
   </div>
   
   </>
  );
}

export default App;
