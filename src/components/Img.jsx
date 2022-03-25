import React from 'react'
import './res.css'

import Swal from 'sweetalert2'

function Img({link,name,price,alt}) {

  const click=()=>{
    Swal.fire({
      title:'Thank you',
      
    })
    
  }

  
  return (
    <>
  
 
     <div className='main'>
      
     
       <div className='pic'> <img  className='img'    src={process.env.PUBLIC_URL + '/image/'+link} alt={alt}/>
        
        <div className='name'>Name: {name} <br/><br/>
        
             Price: ₹ {price}<br/>
     <button type='button' className='button' onClick={click}>Order Now</button>
      </div>
        </div> 
        </div> 
       </>
  )
}

export default Img