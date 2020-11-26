import React, {Component} from 'react';
import CartItem from './CartItem'

function CartList (Props) {
    //const {value} = Props;
    const {cart} = Props.value;
    console.log("-----> ", cart)

        return (
             <div className="container-fluid"> 
             {cart.map((item) =>{
                 return  <CartItem key={item.id} item={item} value={Props.value}/>
             })}
              
             </div>
        )
}

export default CartList;