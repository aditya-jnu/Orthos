import React from 'react';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Flex, Text } from '@radix-ui/themes';
import SelectDemo from './Select';
import Countrycode from './Countrycode';
import '../styles/Contactus.css';

export default function Contactus(props) {
    return (

        <div className='contactus'>
            <Text className='tex' as='div' size="4" style={{fontFamily:'Inter', fontWeight:400, color:'#E8E8E8', letterSpacing:' -0.04px',    lineHeight:'26px'}}>Get the early access and stay ahead of legal, regulatory & compliance risks with confidence</Text>

            <form action="" style={{display:'flex', flexDirection:'column', marginTop:'24px'}}>

                <label htmlFor="companyname"  className='formlabel'>Company Name</label>
                <input type="text" id='companyname' placeholder='e.g. Good Company' className='formip'/>

                <label htmlFor="orgtype" className='formlabel'>Organisation Type</label>
                <div className="select-wrapper" style={{marginBottom:'16px'}}>
                  <SelectDemo/>
                </div>

                <label htmlFor="buisnessemail" className='formlabel'>Business Email</label>
                <input type="email" id='buisnessemail' placeholder='e.g. james.rivera@goodcompany.com' className='formip'/>

                <label htmlFor="phone" className='formlabel'>Phone Number</label>
                <div style={{marginBottom:'24px', display:'flex', gap:'8px'}}>
                  <Countrycode/>
                  <input type="number" id='phone' placeholder='e.g. 8123456789' className='forminp inpp' style={{ width: '380px'}} min="0" />
                </div>

                <Flex gap="2" className='flexbtn'>
                  <button className='btnncancel' onClick={()=>{props.openContactus(false)}}>Cancel</button> 
                  <button className='btnn'>
                    <FaArrowRightToBracket style={{color:'#A8BAEF', width:'16px', height:'16px'}}/><p style={{color:'white'}}>Join Waitlist</p>
                  </button>
                </Flex>

            </form>
        </div>  
    );
}


  
