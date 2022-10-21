import React, { useContext, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';


function App() {
	//State for model
	const [cartIsShown, setCartIsShown] = useState(false);
	const [orderPlaced, setOrderPlaced] = useState(false);

	const cartCtx = useContext(CartContext);
	
	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	const resetStateHandler = (value)=>{
		cartCtx.resetState();
		setOrderPlaced(false);
		setCartIsShown(false);
		console.log('FROM RESET HANDLER');
	}

	const orderHandler = ()=>{
		setOrderPlaced(true);
		console.log('order placed');
	 }

	return (
		<>
		
			{cartIsShown && <Cart onClose={hideCartHandler} onReset={resetStateHandler} onOrder={orderHandler} orderPlaced={orderPlaced}  />}
			<Header onShowCart={showCartHandler}  />
			<main>
				<Meals />
			</main>
		</>
		
	);
}

export default App;

//------------------------NOTES

/**
 * 1-- Since our cart lives in header, and we need to pass the cart handler their, we passed it via props here. Which will be accessed via props in the header file's button
 *
 * 2-- To close the cart, we passed the hideCart handler to the Cart and the reach to the final full cycle reaching to it's parent.
 *
 */

/**
 * ---------USING CONTEXT API
 * The <contextProvider> we made inside the store folder we are gonna use that here, since, here we have the <header>, <cart> and <meals> who needs access to those state.
 */
