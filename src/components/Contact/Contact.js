import React, { Component } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import './Contact.css'
import validator from 'validator';
import { Toast, Spinner,Row,Col } from 'react-bootstrap';

export default class Contact extends Component {
    state ={
        name:"",
        email:"",
        message:"",
        phone:"",
        showAlert:false,
        loading:false
    }
    sendMail =()=>{
        const {name,email,message,phone} = this.state;
        let error=0,msg="";
        if(name === ""){
            error=1;
            msg="Please enter your name!";
        }
        else if(email === "" && phone === ""){
            error=1;
            msg="Please provide us either mobile number or email id";
        }
        if(email !== "" && !validator.isEmail(email)){
            error=1;
            msg="Please provide us valid email id";
        }
         
        if(error === 1){
            this.setState({showAlert:true,msg:msg});
        }else{
            this.setState({loading:true});
            axios.post('/sendMail', {
                name: this.state.name,
                email:this.state.email,
                message:this.state.message,
                phone:this.state.phone
              })
              .then( (response) =>{
                console.log(response);
                this.setState({loading:false});
                this.setState({name:'',phone:"",email:"",message:""});
                this.setState({showAlert:true,msg:"Thanks for your message.We'll get back to you."});
              })
              .catch( (error)=> {
                this.setState({loading:false});
                this.setState({name:'',phone:"",email:"",message:""});
                this.setState({showAlert:true,msg:"Thanks for your message."});

              });
        }
        
    }
    render() {
        return (
            <div className="container-fluid fh">
                    <header className="row">
                    <Navigation/>
                   
                    </header>
                    {/* <div className="contact-header row">
                        <div><span><h2>CONTACT US</h2></span></div>
                    </div> */}
                    <div className="row main-sec-contact">
                        <div className="toast-place">
                        {
                        this.state.showAlert ? 
                        <Row>
                        <Col xs={12}>
                            <Toast onClose={() => this.setState({showAlert:false})} show={this.state.showAlert} delay={3000}  autohide>
                            <Toast.Header>
                                <strong className="mr-auto">MESSAGE</strong>
                            </Toast.Header>
                            <Toast.Body>{this.state.msg}</Toast.Body>
                            </Toast>
                        </Col>
                        </Row>
                        :""
                    }
                        </div>
                       {/* <div className="col-md-6">
                           <div className="address-box">
                           <form>
                           <div>D7/1 , Floor 1</div>
                           <div>Parsn Commercial Complex</div>
                           <div>Nungambakkam High Road</div>
                           <div>Chennai - 600006</div>
                           </form>
                           </div>
                        </div> */}
                        <div className="col-md-12">
                            <form>
                            <div className="pb-3"><span className="form-title">How can we help you. Let's Talk.</span>
                           
                            </div>
                            <div className="form-group mt-2">
                                {/* <label className="form-label">Name</label> */}
                                 <input type="text" className="form-control"  placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">
                                 <input type="number" className="form-control"  placeholder="Mobile Number" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control"  placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">
                                <textarea  className="form-control"  placeholder="Message" value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})}/>
                            </div>
                            <div className="form-group text-center pt-2"><input type="button" className="btn btn-success mt-3 send-btn" value="SEND MESSAGE" onClick={this.sendMail}></input>
                            {
                                    this.state.loading ? 
                                    <Spinner animation="grow"  role="status">
                                    <span className="visually-hidden">Sending the message..</span>
                                    </Spinner> : ""
                                }
                            </div>
                            </form>
                        </div>
                     
                    </div>
                    <div className="row footer-content">
                        <Footer/>
                    </div>
            </div>
        )
    }
}
