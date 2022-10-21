import React from 'react';
import classes from './MealsSummary.module.css';

function MealsSummary() {
	return (
		<section className={classes.summary}>
			<h2>React Food, Delivered To You</h2>
			<p>
				Choose your favorite react meal from our broad selection of available meals and
				enjoy a delicious lunch or dinner while you code or calm down with a bite of react food.
			</p>
			<p>
				All our meals are cooked with high-quality ingredients, just-in-time compiled and of
				course by experienced chefs!
			</p>
		</section>
	);
}
export default MealsSummary;
