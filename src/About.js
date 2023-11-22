import React from 'react'

export default function About(props) {
  {document.title="TextUtils/About.js"}
 
  

  let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'black':'white',
  
  }

  

   
  
 
  return (
    <>

      <div className="container"  >
        <div className="accordion my-3" id="accordionExample" style={{color:props.mode==='dark'?'white':'black'}} >
         <h1>About us</h1>

          <div className="accordion-item  " style={myStyle}>
            <h2 className="accordion-header " >
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Company Establishment</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body " style={myStyle}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias qui fuga placeat vel modi repellendus, adipisci voluptatibus? Animi blanditiis molestias, dolores possimus modi quam? In ipsa necessitatibus dolorem voluptatem.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
               <strong> Company Founder</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quisquam similique fugiat pariatur animi mollitia consequatur omnis officia esse nihil, ab vitae quod eaque dolores beatae quam eum ad expedita!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>  Company Ambition</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, pariatur similique! Nemo aut ipsam tempore consequatur, nobis voluptatem magni recusandae et rerum id reprehenderit maiores enim impedit molestiae nostrum? Distinctio.
              </div>
            </div>
          </div>
       
        </div>

      </div>
    </>
  )
}
