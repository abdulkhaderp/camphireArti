import React, { Component } from 'react'
import './Service.css'
import {Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faVolumeUp,faBug ,faNetworkWired,faChartLine,faTv} from '@fortawesome/free-solid-svg-icons';
import {Animated} from "react-animated-css";
import { withRouter } from 'react-router-dom';


 class Service extends Component {
    constructor(props) {
        super(props);    
    }
    goToService=()=>{
        this.props.history.push('/services');
    }
    render() {
        return (
            <div className="col-12 service-wrapper pt-0">
                    <div className="service-title text-left"><h1>WHAT SERVICES WE OFFER?</h1></div>
                    <div className="row animate__animated animate__fadeInUp box-area">
                    <div className="col-md-4 main-service-summary">
                        <Card>                    
                        <Card.Body>
                        <span className="serv-icon"><FontAwesomeIcon icon={faGlobe}/></span>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                                From simple websites to complex web applications,we build 
                                with latest tech stacks in a highly scalable approach 
                            </Card.Text>
                            <Button variant="primary" onClick={this.goToService}>Know More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 main-service-summary">
                        <Card>
                        <Card.Body>
                        <span className="serv-icon"><FontAwesomeIcon icon={faVolumeUp}/></span>
                            <Card.Title>Digital Marketing</Card.Title>
                            <Card.Text>
                            Digital marketing lets you have a two-way conversation with customers and leads
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 main-service-summary">
                        <Card>
                        
                        <Card.Body>
                        <span className="serv-icon"><FontAwesomeIcon icon={faBug}/></span>
                            <Card.Title>Quality Assurance</Card.Title>
                            <Card.Text>
                                We offer comprehensive quality assurance services which cover critical aspects
                                of performance,security etc
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 main-service-summary">
                        <Card>
                        <Card.Body>
                        <span className="serv-icon"><FontAwesomeIcon icon={faNetworkWired}/></span>
                            <Card.Title>Networking</Card.Title>
                            <Card.Text>
                            We provide world-class end-to-end IT infrastructure solutions and services to accelerate your digital transformation
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 main-service-summary">
                        <Card>
                        <Card.Body>
                        <span className="serv-icon"><FontAwesomeIcon icon={faChartLine}/></span>
                            <Card.Title>Business Insights</Card.Title>
                            <Card.Text>
                                By combining data and analysis, insights help organizations to proactively
                                take the next steps 
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 main-service-summary">
                        <Card>
                        <Card.Body>
                        <span className="serv-icon"><FontAwesomeIcon icon={faTv}/></span>
                            <Card.Title>Collaboration</Card.Title>
                            <Card.Text>
                            Unified Communications and Collaboration technology combines all forms of business communications into a single, unified solution
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    </div>
                   
            </div>

            
        )
    }
}
export default withRouter(Service)