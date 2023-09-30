import React, {useState} from 'react'

export default function Textform(props) {

   const removeSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces", "success")
   }

    const copyText=()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is copied", "success")
    }
     const clearText = ()=>{
        setText("");
        props.showAlert("Text is cleared", "success")
    }
    const toUpCase = ()=>{
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Text converted to UpperCase", "success")
    }
    const toLoCase = ()=>{
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Text converted to LowerCase", "success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState("")
  return (
    <>
    <div className='container'  style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
 
<textarea className="form-control" value ={text} style={{backgroundColor:props.mode==='light'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
<button className='btn btn-dark my-3 mx-1' onClick={clearText}>Clear Text</button>
<button className='btn btn-dark my-3 mx-1' onClick={copyText}>Copy text</button>
<button className='btn btn-dark my-3 mx-1' onClick={removeSpaces}>Remove Extra Spaces</button>
<button className='btn btn-dark my-3 mx-1' onClick={toUpCase}>To Upper Case</button>
<button className='btn btn-dark my-3 mx-1' onClick={toLoCase}>To Lower Case</button>
</div>
    </div>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
   </div>
   </>
  )
}
