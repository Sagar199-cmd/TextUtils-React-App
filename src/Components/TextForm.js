import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("Enter your text here")
    const ConvertupCase=()=>{
        let data=text.toUpperCase()
        setText(data)
        props.showAlert("text converted to upper case","success")
    }
    const ConvertLoCase=()=>{
        let data=text.toLowerCase()
        setText(data)
        props.showAlert("text converted to lower case","success")
    }
    const Reverse=()=>{
        let data=""
        for(let i=text.length-1;i>=0;i--){
            data+=text.charAt(i);
        }
        setText(data)
        props.showAlert("text order is reversed","success")
    }
    const handelOnChange=(event)=>{
        setText(event.target.value)
    }
    const copyText=()=>{
        let text=document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("text coppied successfully","success")
    }
    const clearText=()=>{
        setText("");
        props.showAlert("text cleared","success")
    }
    const countWords=(msg)=>{
        let words=msg.split(" ");
        if(words[(words.length)-1]===""){
            return words.length-1;
        }
        else{
            return words.length;
        }
    }
    return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="mybox" value={text} onChange={handelOnChange}rows="5" style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={ConvertupCase}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={ConvertLoCase}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={Reverse}>Reverse your String</button>
    <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{countWords(text)} Words {text.length} Charcters</p>
        <p>Time to Read- {0.008*countWords(text)} Minutes</p>
        <h3>Your Text Preview</h3>
        <p>{text}</p>
    </div>
  </div>
    </>
  )
}
