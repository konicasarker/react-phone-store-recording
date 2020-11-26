import React, {Component} from 'react'
import Title from './Title'
import Product from './Product'
import {storeProducts} from '../data';
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
    state={
        products: storeProducts
    };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="Products"/>
                        <div className="row">

                        </div>
                        <ProductConsumer>
                            {value=>{
                               console.log(value)
                               return value.products.map(product => {
                                    return <Product key={product.id} product=
                                    {product} />;
                               })
                            }} 
                        </ProductConsumer>
                        </div>
                </div>
            </React.Fragment>
               // <Product/>

        )
    }
}