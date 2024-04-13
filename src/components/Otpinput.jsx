import React from 'react';
import '../styles/Otpinput.css';
import { TextArea, Flex } from '@radix-ui/themes';

export default function Otpinput() {
    return (
        <Flex>
            <Flex>
             <input type="number" className='otpip1' min="0" />
             <input type="number"className='otpip2' min="0"/>
             <input type="number" className='otpip3' min="0"/>
            </Flex>
            <div style={{width:'17px', height:'40px', display:'flex', alignItems:'center', justifyContent:'center',  marginLeft:'8px', marginRight:'8px'}} >
                -
            </div>
           <Flex>
             <input type="number" className='otpip1' min="0"/>
             <input type="number"className='otpip2' min="0"/>
             <input type="number"className='otpip3' min="0"/>
           </Flex>
       </Flex>
    );
}
