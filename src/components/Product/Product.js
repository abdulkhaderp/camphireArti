import React, { Component } from 'react';
import { productConfig } from '../../config/productConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign,faArrowCircleLeft,faShoppingBasket,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { Toast, Spinner,Row,Col } from 'react-bootstrap';


import './Product.css';
export default class Product extends Component {
    state = {
        showAlert:false,
        item : {
            desc:[],
            image:""
        }
    }
    
    componentDidMount(){

        let prodId = 1; //default setting to first product
        let qParam = this.props.location.search;
        if(qParam && qParam.length){
             prodId = qParam.split("=")[1];
        }
        const productSelected = productConfig.filter((prod)=>{
            return prod.id == prodId
        })
        console.log(productSelected[0]);
        this.setState({item : productSelected[0]});

    }
    goToProductList =()=>{
        this.props.history.push("/home");
    }
    goToCartPage = ()=>{
        this.props.history.push("/cart");
    }
    addToCart = ()=>{
        const product = this.state.item;
        let cart = [];
        //Check if anything already added in cart
        if(localStorage.getItem("camphireCart")){
            cart = JSON.parse(localStorage.getItem("camphireCart"));
        }
        //Append the cart array with product selected
        cart.push(product);
        //Save cart array back in localstorage
        localStorage.setItem("camphireCart",JSON.stringify(cart));
        this.setState({showAlert:true})
    }
    //Quick buy
    buyProduct=()=>{
        let watsap = "https://wa.me/917736475313?text=";
        let msg="Hello, I want to place an order!%0aOrder Summary%0a%0a";

        const item = this.state.item;
        let line1 = "Product: "+item.title+"%0a";
        let line2 = "Quantity: 1"+"%0a";
        let line3 = "Total Price :"+(item.price)+"%0a%0a";
        msg = msg+line1+line2+line3;
        
        //Get a tag, set href and click.
        let a = document.getElementById("hiddenInProduct");
        a.href = watsap+msg;
        a.click();

    }
  
  render() {
    const p = this.state.item.image;
    return (
    <React.Fragment>
        <a target="_blank" href="" id='hiddenInProduct'>Cart Checkout</a>  
        {
            this.state.showAlert ? 
                <Row>
                    <Col xs={12}>
                        <Toast onClose={() => this.setState({showAlert:false})} show={this.state.showAlert} delay={2000}  autohide>
                            <Toast.Body>Successfully added to cart!</Toast.Body>
                        </Toast>
                     </Col>
                </Row>
            :""
        }
        <div className='row pt-1 pb-1'>
            <div className='col-md-6'>
                <div className='prod-image'>
                    <span className='go-back' onClick={this.goToProductList}><FontAwesomeIcon icon={faArrowCircleLeft} size='2x'/></span>
                    <span className='view-cart' onClick={this.goToCartPage}><FontAwesomeIcon icon={faShoppingCart} size='2x'/></span>
                    {/* <img src={require(`../../assets/Items/${p.image}`)}></img> */}
                    {
                        p.length ? <img src={require(`../../assets/Items/${p}`)}></img> : ""
                    }
                    
                </div>
            </div>
            <div className='col-md-6'>
                    <div className='p-title-section pt-1'>
                        <h2 className=''>{this.state.item.title}</h2>
                        <h2><span className="prod-price"><FontAwesomeIcon icon={faRupeeSign}/>{this.state.item.price}</span></h2>
                    </div>
                    <div className='p-description-section'>
                        <h5>More Details</h5>
                        {
                            this.state.item.desc.map((desc,index)=>{
                                return(
                                    <span key={index}>{desc}</span>
                                )
                            })
                        }
                        <span>Shipping charges extra</span>
                    </div>
                    <div className='p-buy-section mt-1'>
                        <button className='btn btn-warning' onClick={this.addToCart}><FontAwesomeIcon icon={faShoppingBasket} className='mr-2'/>ADD TO CART</button>
                        <button className='buy-now btn btn-success' onClick={this.buyProduct}><FontAwesomeIcon icon={faWhatsapp} className='mr-2'/>BUY NOW</button>
                    </div>
            </div>
        </div>  
    </React.Fragment>
     
    )
  }
}
