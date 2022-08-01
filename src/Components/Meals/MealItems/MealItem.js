import React, {useContext} from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItems.module.css'
import CartCtx from '../../../store/cart-context';

function MealItem(props) {
      const cartContext = useContext(CartCtx)
      const price = `$${props.price.toFixed(2)}`

      const addToCartHandler = amount => {
cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
})
      }
      return (
           <li className={classes.meal}>
            <div>
<h3>{props.name}</h3>
<div className={classes.description}>
      {props.description}
</div>
<div className={classes.price}>
      {price}
</div>
            </div>
            <div>
                <MealItemForm onAddToCard={addToCartHandler}/>
            </div>
           </li>
      );
}

export default MealItem;