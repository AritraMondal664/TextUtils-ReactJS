import React,{useState} from 'react'



export default function TextForm(props) {  

  const handelOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  } 

  const handelUpClick = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success")
  }

  const handelLowClick = ()=>{
    // console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success")
  }

    const handelClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cleared!","success")
  }

  const handelCopy = ()=>{
    // console.log("I'm copy");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied!","success")
  }

  const handelExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces has been removed!","success")
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  )
}
