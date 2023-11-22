import React, { useState } from 'react'

export default function Textform(props) {
   {document.title="TextUtils/Home"}

   const [text, setText] = useState("");

   const handleOnChange = (event) => {
      setText(event.target.value);
     

   }

   const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
     {newText===''?
     props.showAlert("Textbox is Empty","warning"):
      props.showAlert("Coverted into UpperCase","success");
   }
    

   }

   const handleLowerClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Coverted into LowerCase","success");
      {newText===''?  props.showAlert("Textbox is Empty","warning"):
      props.showAlert("Coverted into LowerCase","success");}

   }


   const clear = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Clear ","success");
      
      

   }

   const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('copied to clipboard','success');
      
      

   }

  

   return (
      <>
   

         <div className="mb-3 my-1" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2 className='mb-4'>{props.heading}</h2>

            <textarea className="form-control " id="exampleFormControlTextarea1" rows="10"
               value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode==='dark'?'#7e7777':'white',color:props.mode==='dark'?'white':'black'
            
             }}

            ></textarea>

            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clear}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>CopyText</button>
           
          
         </div>

         <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}
         >
            <h3>Your text summary</h3>
         <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0;
         
         }).length} words and {text.length} Characters</p>
            <p>{0.008 * (text.split(" ").filter((element)=>{
            return element.length!==0;
         
         }).length)} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
         </div>


        


      </>
   )
}
