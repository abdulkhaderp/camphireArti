import React, { Component } from 'react'
import './Offer.css';
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

import "react-multi-carousel/lib/styles.css";

 class Offer extends Component {
    responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    }
    goToCartPage = ()=>{
        this.props.history.push("/cart");
    }
    render() {
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
          };
        
        return (
            <React.Fragment>
                    <div className="col-12 client-wrapper">
                    {/* <div className="service-title text-center"><h1>OFFERS</h1></div>
                    <div className="subtitle-text">
                        <span>We are trusted by leading brands across industries. Take a look at our happy clients.</span>
                    </div> */}
                    <div className="carousel-wrapper">
                    <span className='view-cart-home' onClick={this.goToCartPage}><FontAwesomeIcon icon={faShoppingCart} size='2x'/></span>
                    <Carousel arrows={false}
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={ true}
                            keyBoardControl={false}
                            // customTransition="transform 500ms ease-in-out"
                            // transitionDuration={100}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px" >
                            <div className="press-item">
                                <div className="client1"></div> 
                                {/* <label>111Lorem Lorem Ipsum is simply dummy text of the printing and typesetting indust</label>    */}
                            </div>
                            <div className="press-item">
                                <div className="client2"></div> 
                            </div>
                            <div className="press-item">
                                <div className="client3"></div> 
                            </div>
                            <div className="press-item">
                                <div className="client2"></div> 
                            </div>
                            {/* <div className="press-item">
                                <div className="client3"></div> 
                            </div>
                            <div className="press-item">
                                <div className="client4"></div> 
                            </div> */}
                            </Carousel>
                    </div>
            </div>
            
            </React.Fragment>
            
        )
    }
}
export default withRouter(Offer);