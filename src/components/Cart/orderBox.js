import React from 'react';
import classes from './Cart.module.css';


function OrderBox(props){
 return (
   <>
    {props.cartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>{props.totalAmount}</span>
   </div>
   <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
     Close
    </button>
    {props.hasItems && <button className={classes.button} onClick={props.onOrder} >Order</button>}
   </div>
   
   </>
)
};
 export default OrderBox; 