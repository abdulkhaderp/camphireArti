import React, { Component } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import './ServiceView.css';
export default class ServiceView extends Component {
    render() {
        return (
            <div className="container-fluid fh">
            <header className="row">
            <Navigation/>
            </header>
            {/* <div className="contact-header row">
                <div><span><h2>SERVICES</h2></span></div>
            </div> */}
            <div className="row about-sect1 ">
                        {/* <div className="col-md-6">
                            <div className="about-us-image"></div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="about-us-text">
                                <p>Cereus Digital Solutions provides innovative visions in the technocratic arena lightens a next generation technology company with strong business and client relationship interest in information technology solutions and services. 

We are a digital marketing desk whereas, we test and push the boundaries of what is possible.
We are focusing on driving business growth through technology and new-age marketing. 
With our core experience in leveraging digital platforms for business transformation, we deliver solutions to the rising challenges and opportunities.</p>
                            </div>
                        </div>
                        
                    </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="service-item-wrapper">
                        <div className="service-item row">
                            <div className="col-md-6 image-box-service">
                                <div className="service-item-icon"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-box-wrapper">
                                    <div className="service-item-title">
                                        <h3>Network & Security</h3>
                                    </div>
                                    <div className="service-item-desc">
                                        <p>We provide world-class end-to-end IT infrastructure solutions and services to accelerate your digital transformation journey. Our customized solutions will boost your operational efficiency, enable innovation, improve customer experience, mitigate risk and deliver outstanding performance. Further, we support you by developing scheduled security operations that utilize the latest technologies. We possess experienced security expertise, that you may need to secure your organization.</p>
                                    </div>
                                </div>
                                <div className="service-box-wrapper">
                                    <div className="service-item-title">
                                        <h3>Unified Communications and Collaboration</h3>
                                    </div>
                                    <div className="service-item-desc">
                                        <p>Unified Communications and Collaboration technology combines all forms of business communications into a single, unified solution through the use of voice and video conferencing, document sharing, instant messaging, presence and other business applications. we can enhance productivity, saves time, reduces travel expenses, and overall promotes collaboration with the successful implementation of Video Conferencing.
</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="service-item row exceptional">
                            <div className="col-md-6">
                                <div className="service-box-wrapper">
                                    <div className="service-item-title">
                                        <h3>Web Development</h3>
                                    </div>
                                    <div className="service-item-desc">
                                        <p>The online presence of a business starts with a website.In the new world where everything turn to virtual, mere online presence might
                                            not be enough to be in the race. The areas of wed development has grown and improved exponentially over time, and 
                                            now reached a state where web based solutions replacing the older legacy desktop applications.                                              
                                        </p>
                                    </div>
                                </div>
                                <div className="service-box-wrapper">
                                    <div className="service-item-title">
                                        <h3>Cloud Solutions</h3>
                                    </div>
                                    <div className="service-item-desc">
                                        <p>Build a virtual environment that enables innovation and fast responses to changing business needs with access to the world’s leading local and global cloud service platforms from a single portal. We are having partnership with leading cloud providers like Azure, AWS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 image-box-service">
                                <div className="service-item-icon software"></div>
                            </div>
                        </div>
                        <div className="service-item row">
                        <div className="col-md-6 image-box-service">
                                <div className="service-item-icon collab"></div>
                            </div>
                            <div className="col-md-6">
                            <div className="service-box-wrapper">
                                    <div className="service-item-title">
                                        <h3>Digital Marketing</h3>
                                    </div>
                                    <div className="service-item-desc">
                                        <p>Converting a customer online is not a big deal. All you need to do is just make your marketing strategy an engaging one. Targeted traffic offers bigger chances for conversion. Unlike other types of advertising, digital marketing lets you have a two-way conversation with customers and leads.</p>
                                    </div>
                                </div>
                                <div className="service-box-wrapper">
                                    <div className="service-item-title">
                                        <h3>Quality Assurance</h3>
                                    </div>
                                    <div className="service-item-desc">
                                        <p> With the increased use of digital products in both personal and professional areas, ensuring the quality of these solutions
                                            have become atmost important and essential.If a well crafted mobile app or web app presents wrong numbers to the user, it is of no use and indeed,
                                            provide the exact opposite of what the application has supposed to do. Our experts can evaluate and ensure the quality of the digital products with respect
                                            to multiple parametres like performance,security,scalibility through either manual or automated testing.   
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
            <div className="row footer-content">
                <Footer/>
            </div>
    </div>
        )
    }
}
