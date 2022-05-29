import React, { Component } from 'react';
import Offer from '../Offer/Offer'
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="row client-content">
                <Offer/>
            </div>
            <div className="row list-content">
                <ProductList/>
            </div>
            <div className="row footer-content">
                <Footer/>
            </div>
            </React.Fragment>
            )
        }
    }
    