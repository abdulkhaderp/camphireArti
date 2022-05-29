import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import './ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { productConfig } from '../../config/productConfig';
import { withRouter } from 'react-router-dom';

class ProductList extends Component {

goToItemDetail=(product)=>{
const id=product.id;
//this.props.history.push("/product");
this.props.history.push({
    pathname:"/product",
    search:`?id=${id}`
});
}
  render() {
    return (
      <React.Fragment>
          {productConfig.map((index,item)=>{
                 return(
                    <div className="col-md-3 col-sm-6 col-6 item-box" onClick={()=>{this.goToItemDetail(index)}} key={item}>
                    <Card>  
                    <img src={require(`../../assets/Items/${index.image}`)}></img>                  
                    <Card.Body>
                    
                    <Card.Title>{index.title}</Card.Title>
                    <Card.Text>
                    <span className=""><FontAwesomeIcon icon={faRupeeSign}/></span> {index.price}
                    </Card.Text>
                    
                    </Card.Body>
                    </Card>
                    </div>
                 )
                 
          })
          }
         
      </React.Fragment>
    )
  }
}
export default withRouter(ProductList);
