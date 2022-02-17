import React, {useState} from 'react'

export default function Textbox() {
    const uppar = ()=>{
        console.log("uppar clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const small = ()=>{
        console.log("uppar clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const change = (event)=>{
        console.log("changed");
        setText(event.target.value)
    }
   





    const [text, setText] = useState('Enter Your Text here');
    let word = text.split(" ").length;
    if(text.charAt(text.length-1)== " "){
        word = word - 1 ;
    }


  return (
      
<>

    <div> 
        <textarea id="w3review" name="w3review" value= {text} rows="20" cols="70"  onChange={change}>
        
        </textarea>
        <button onClick={uppar}> Click Me!</button>
        <button onClick={small}> Small Letter!</button>
    </div>

    <div className="op">
        <h1>Summery</h1>
        {word} words and {text.length} character.
    </div>

    </>
  )
}
