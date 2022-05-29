import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import './About.css'
export default class componentName extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className='row pt-3'>
                        <div className='col-md-4'>
                            <div className='about-logo'></div>
                        </div>
                        <div className='col-md-8'>
                            <div className='about-text'>
                                <p>Since 2020. 
                                    Camphire Artistry is a complete organic henna store. 
                                    We provide products like Organic henna cones, Nail cones, Hair henna, DIY beginners kit, Bridal box, Semi bridal box, Aftercare balm. 
                                    We also provide services like Bridal henna designing, Party henna & Henna making class.</p>
                                <p>We ship henna cones all over kerala and DIY kit all over India.</p>    
                            </div>
                        </div>
                    </div>

                    <div className="row footer-content">
                        <Footer/>
                    </div>
            </React.Fragment>
                    
        )
    }
}
