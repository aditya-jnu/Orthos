import React from 'react'
import '../styles/Footer.css';
import Footerlogo from '../assets/Footerlogo';
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <div className='footer'>
            <div className='one'>
                <Footerlogo/>
                <div className='onee'>
                    <p>Safety</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>

            <div className='Seprator' style={{borderBottom:'1px solid #4C679B'}}></div>

            <div className='three'>
                <p>Copyright &copy; 2024 Orthos. All rights reserved.</p>
                
                <div style={{display:'flex', gap:'1rem'}}>
                  <FaLinkedin className='footicon'/>
                  <FaDiscord className='footicon' />
                  <FaXTwitter className='footicon' />
                  <FaGithub className='footicon' />
                </div>
            </div>
        </div>
    );
}
