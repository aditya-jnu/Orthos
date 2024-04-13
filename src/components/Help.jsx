import React from 'react';
import '../styles/Help.css'
function Help(props) {
    return(
        
         <div className='Help'>
            <div className='Helpcontent' style={{padding:'1rem',display:'flex',justifyContent:'space-between'}}>
                 <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem'}} >
                    <p className='que'>Have questions?</p>
                    <p className='getintouch'>Get in touch with our team. We respond within 24 hours.</p>
                 </div>
                 <button className='helpbtn' onClick={()=>{props.openContactus(true)}} style={{fontFamily:'Inter', fontSize:'16px'}}>Contact Us</button>
            </div>
            <p className='orthosai'>Orthos.ai is currently in open beta and usage of the platform may be limited fo unpaid users</p>       
        </div>
    );
}
export default Help;
