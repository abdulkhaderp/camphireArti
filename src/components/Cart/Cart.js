import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign,faTrash,faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './Cart.css';
export default class Cart extends Component {
    state = {
        items : []
    }
    componentDidMount(){
        const itemsFromCartTemp = localStorage.getItem("camphireCart");
        if(itemsFromCartTemp =="" || itemsFromCartTemp == undefined || itemsFromCartTemp == null){
            this.setState({items:[]});
        }else{
            let itemsFromCart = JSON.parse(itemsFromCartTemp);
            itemsFromCart.forEach(element => {
                element.quantity = 1;
            });
            this.setState({items:itemsFromCart});
        }
       
    }  
    reduceQuantity = (item,index)=>{
        if(item.quantity>1){
            item.quantity--;
            let ar = this.state.items;
            ar[index] = item;
            this.setState({items:ar});
        }  
    }
    increaseQuantity =(item,index)=>{
        item.quantity++;
        let ar = this.state.items;
        ar[index] = item;
        this.setState({items:ar});

    }
    getTotalCartValue=()=>{
        let total =0;
        let stateArray = this.state.items;
        stateArray.forEach(element => {
            const individualPrice = element.price * element.quantity;
            total = total+individualPrice;
        });
        return total;
    }
    deleteFromCart = (item,index)=>{
        let stateArray = this.state.items;
        stateArray.splice(index,1);
        this.setState({items:stateArray});

        //Update localstorage as well
        localStorage.setItem("camphireCart",JSON.stringify(stateArray));
    }
    goBackToHome =()=>{
        this.props.history.push("/home");
    }
    //Cart checkout
    checkOutCart=()=>{
        //get data from localstorage
        const items = this.state.items;
        let watsap = "https://wa.me/917736475313?text=";
        let msg="Hello, I want to place an order!%0aOrder Summary%0a%0a";
        for(let i=0;i<items.length;i++){
            const item = items[i];
            let line1 = "Product: "+item.title+"%0a";
            let line2 = "Quantity: "+item.quantity+"%0a";
            let line3 = "Total Price :"+(item.price*item.quantity)+"%0a%0a";
            msg = msg+line1+line2+line3;
        }
        const sumTotal = this.getTotalCartValue();
        let lastLine = "Grand Total(Rs): "+sumTotal;
        msg = msg+lastLine;

        //Get a tag, set href and click.
        let a = document.getElementById("hidden");
        a.href = watsap+msg;
        a.click();

    }
  render() {
    return (
     <React.Fragment>
        <a target="_blank" href="" id='hidden'>Cart Checkout</a>  
        <div className='row mt-2 cart-title-section'>
          <div className='col-2'><span onClick={this.goBackToHome} className='cart-go-back'><FontAwesomeIcon icon={faArrowCircleLeft} size='2x'/></span></div>  
          <div className='col-5 '>
            <h3>My Cart</h3>
          </div>
          <div className='col-5 cart-price'>
                <h3><span className='cart-total-text'>Total:</span> <span className='ml-2 mr-1 cart-total-amount'><FontAwesomeIcon icon={faRupeeSign}/>{this.getTotalCartValue()}</span></h3>
          </div>
        </div>

            {
                this.state.items.map((item,index)=>{
                    return(
                        <div className='row mt-2 cart-row' key={index}>
                                <div className='col-5 col-md-3'>
                                    <div className='cart-item-pic'>
                                        <img src={require(`../../assets/Items/${item.image}`)}></img>
                                    </div>
                                </div>
                                <div className='col-7 col-md-4 div-trash-with'>
                                    <div className='cart-item-title'>
                                        <h3>{item.title}</h3>
                                        </div>
                                    <div className='cart-item-price'><FontAwesomeIcon icon={faRupeeSign}/>{item.price*item.quantity}</div>

                                    <div className='cart-quantity mt-2'>
                                        <div className='circle c-left' onClick={()=>{this.reduceQuantity(item,index)}}><span>-</span></div>
                                            <div className='total-count'><span>{item.quantity}</span></div>
                                        <div className='circle c-right' onClick={()=>{this.increaseQuantity(item,index)}}><span>+</span></div>
                                    </div>
                                    <span className='cart-trash' onClick={()=>{this.deleteFromCart(item,index)}}><FontAwesomeIcon icon={faTrash} /></span>

                                </div>
                        </div>
                    )
                })
            }
            {
                this.state.items.length ? 
                <button className='col-12 buy-now btn btn-success btn-lg' onClick={this.checkOutCart}><FontAwesomeIcon icon={faWhatsapp} className='mr-2'/><span className='ml5'>BUY NOW</span></button>
                :""
            }
        
     </React.Fragment>   
      
    )
  }
}
