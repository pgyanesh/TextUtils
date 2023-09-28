import React, {useState} from 'react'

export default function Textform(props) {
    const toUpCase = ()=>{
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState("Enter your text here")
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
 
<textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
<button className='btn btn-primary my-3' onClick={toUpCase}>To Upper Case</button>
</div>
    </div>
  )
}
