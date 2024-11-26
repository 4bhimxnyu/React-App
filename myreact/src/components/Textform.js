import React ,{useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState('enter the text');

    const OnClickFun =()=>{
        console.log("onclick button was clicked");
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const OnChangeFun = (event)=>{
        console.log("onchange event has been called")
        setText(event.target.value)
    }

    const OnclickLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const OnclickClear = ()=>{
        let newText = '';
        setText(newText); 
    } 

    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">enter your text here for analysis</label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={OnChangeFun} style={{backgroundColor:props.mode==='dark'?'#212530':'white'}}>This text will be dynamically changed</textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={OnClickFun}>Uppercase</button>
        <button className="btn btn-danger mx-1" onClick={OnclickLower}>Lowercase</button>
        <button className="btn btn-secondary mx-1" onClick={OnclickClear}>Clear</button>
        {/* <button className="btn btn-alert mx-1 " onClick={InvereCase}>Inverse Case</button> */}
    </div>
    <div className='contain' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Get the preview of the textForm WebPage</h2>
        <p>Word Count : {text.split(" ").length}</p>
        <p>Number of Characters : {text.length}</p>
        <p>Time taken to Read all the text is {0.008 * text.split(" ").length} seconds</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
        
    </div>
    </>
  )
}

