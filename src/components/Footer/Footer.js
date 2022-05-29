import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

import { faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <div className="col-md-12 footer-wrapper">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="company-info">
                                <label><h4>Camphire Artistry</h4></label>
                                <p>
                                    Complete organic henna store. We provide products like organic henna cones, nail cones, hair henna,
                                     DIY kit, bridal box, aftercarcare balm etc.

                                </p>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="social-info">
                                <label className='d-none d-md-block text-center'><h6>SOCIAL</h6></label>
                                    <div className='social-links'>
                                        
                                    <a href="https://www.instagram.com/camphire_artistry/?hl=en" target='_blank'>
                                        <label className="social-icon "><FontAwesomeIcon icon={faInstagram} size='2x'/></label>     
                                    </a>   
                                    
                                    <a href="https://wa.me/917736475313?text=Hello,I would like to know more about Camphire Artistry" target='_blank'>
                                    <label className="social-icon ml"><FontAwesomeIcon icon={faWhatsapp} size='2x'/></label>   
                                    </a>     
                                        
                                    </div>
                                    

                                    
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="address-info">
                                <label className='d-none d-md-block'><h6>CONTACT</h6></label>
                                    <div>
                                       
                                        {/* <label>D7/1 , Floor 1</label>
                                        <label>Parsn Commercial Complex</label>
                                        <label>Nungambakkam High Road</label>
                                        <label>Chennai - 600006</label> */}

                                        <div className="mt-1"> 
                                    <span className="social-icon"><FontAwesomeIcon icon={faPhoneAlt}/></span>
                                        <span className="mleft">+91 7736475313</span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="social-icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                                        <span className="mleft">camphireartistryin@gmail.com</span>

                                    </div>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="copyright text-center">
                           <span>© Copyright 2022 | <span className="mlf">Made By <a target="_blank" href='https://vindwebsolutions.netlify.app/'>Vindweb Solutions</a></span></span> 
                    </div>
            </div>
        )
    }
}
