import React, {useState} from 'react'

export default function Textform(props) {
    const toUpCase = ()=>{
        let newText = text.toUpperCase()
        setText(newText);
    }
    const toLoCase = ()=>{
        let newText = text.toLowerCase()
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState("")
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
 
<textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
<button className='btn btn-primary my-3' onClick={toUpCase}>To Upper Case</button>
<button className='btn btn-primary my-3 mx-1' onClick={toLoCase}>To Lower Case</button>
</div>
    </div>
    <div className='container'>
    <h2>Your Text Summary</h2>
    <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
   </div>
   </>
  )
}
