import React from 'react'
import Mainlogo from '../assets/Mainlogo';
import Ellipse from '../assets/Ellipse';
import Usp1 from '../assets/Usp1';
import icon from '../assets/icon.png';
import '../styles/Logousp.css';

export default function Logousp() {
    return (
              
            <div className='intro'>
                <div className="Orthos-Logo">
                    <Mainlogo/>   
                </div>
                <div className='make'>
                    <p>Make the legalities,</p>
                    <p>easier</p>
                  </div>

                <div className='USP'>
                    <div className='Contact_Markers1' style={{ padding:'0 0 20px 0'}}>
                        <div className="usp-container">
                          <Ellipse/>
                          <div className="usp-overlay"><Usp1/></div>
                        </div>
                        <div>
                           <p style={{fontWeight:'500', fontFamily:'Inter'}}>Power of AI in hands</p>
                           <p style={{fontSize:'12px', fontWeight:'400', fontFamily:'Inter', lineHeight:'16px', color:'#C6D2F3'}}>You will be the pioneer of your<br/> buisness innovation</p>  
                        </div>  
                    </div>
                    <div className='Seprator' style={{borderBottom:'1px solid #4C679B', background:'var(--Blue-Gray-blue-gray-9'}}>
                    </div>
                    <div className='Contact_Markers2' style={{padding:'20px 0 0 0'}}>
                        <div className="usp-container">
                            <Ellipse/>
                            <img src={icon} style={{marginTop:'0.5rem'}} className="img-overlay"></img>
                        </div>
                        <div>
                            <p style={{fontWeight:'500', fontFamily:'Inter'}}>Stand our from rest</p>
                            <p style={{fontSize:'12px', fontWeight:'400', fontFamily:'Inter', lineHeight:'16px', color:'#C6D2F3'}}>With our solutions hit your maximum<br/> potentials</p>
                        </div>
                    </div>
                </div> 
            </div>
    );
}
