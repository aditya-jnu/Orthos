import React, { cloneElement } from 'react'
import Accordiondemo from '../components/Accordiondemo';
import '../styles/Faq.css';
export default function Faq() {
    return (
            <div className='FAQ_section'>

               <div className='content1' style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                  <p className='p1'>Frequently asked questions</p>
                  <p className='p2'>Everything you need to know about the product and billing.</p>
               </div>

               <div className="content2">
                   <Accordiondemo/>
               </div> 
        </div>
       
    )
}
