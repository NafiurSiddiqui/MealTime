import React from 'react';
import classes from './SuccessMessage.module.css';

function SuccessMessage(props) {
	return (
		<>
			<p className={classes.message}>Your React meal is on the way!</p>

			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					{' '}
					Close{' '}
				</button>
			</div>
		</>
	);
}
export default SuccessMessage;
