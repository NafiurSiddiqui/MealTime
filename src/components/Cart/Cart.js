import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import OrderBox from './orderBox';
import SuccessMessage from './successMessage';

function Cart(props) {



 const cartCtx = useContext(CartContext);

 const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 const hasItems = cartCtx.items.length > 0;

 const cartItemRemoveHandler = (id) => {
  cartCtx.removeItem(id);
 };

 const cartItemAddHandler = (item) => {
  cartCtx.addItem({ ...item, amount: 1 });
 
 };



 const cartItems = (
  <ul className={classes['cart-items']}>
   {cartCtx.items.map((item) => (
    <CartItem
     key={item.id}
     name={item.name}
     amount={item.amount}
     price={item.price}
     onRemove={cartItemRemoveHandler.bind(null, item.id)}
     onAdd={cartItemAddHandler.bind(null, item)}
     
    />
   ))}
  </ul>
 );

 return (
  <Modal onClose={props.onClose}>
    
   {props.orderPlaced ? <SuccessMessage onClose={props.onReset}  /> : <OrderBox hasItems={hasItems} totalAmount={totalAmount} onOrder={props.onOrder} onClose={props.onClose} cartItems={cartItems} />}
   

  </Modal>
 );
}
export default Cart;

//-----------NOTES

/**
 * Here we get the hideCart handler from the App to make the full cycle.
 * 1.close for the modal
 * 2.close for the close button itself
 *
 * @cartCtx -
 * we used it here to get the data from <MealtemForm> and render it in the cart.
 *
 * @hasItems -
 * To check if we have items then render the button.
 *
 * @onRemove and @onAdd -
 *
 * @bind - we used bind to pass in the args. Without binding we cannot directly pass in the arguments there.
 */
