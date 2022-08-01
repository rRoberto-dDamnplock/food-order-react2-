import React , {useContext, useEffect, useState}from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartCtx from '../../store/cart-context';

function HeaderCartButton(props) {
      const [btnIsHighlighted, setButtonIsHighLighted] = useState(false)
      const CartContext = useContext(CartCtx)
      
      const numOfCartItems = CartContext.items.reduce((currNumber, item) => {
            return currNumber + item.amount
      }, 0);
     
      const {items} = CartContext
      const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
      
      useEffect(()=> {
            if(CartContext.items.length === 0){
                  return;
            }
setButtonIsHighLighted(true);
const timer =setTimeout(() => {
      setButtonIsHighLighted(false);
}, 300);

return() => {
      clearTimeout(timer);
}

      }, [items])
      return (
            <button className={btnClasses} onClick={props.onClick}>
                  <span className={classes.icon}>
                        <CartIcon/>
                  </span>
                  <span>Your Cart</span>
                  <span className={classes.badge}>
                        {numOfCartItems}
                  </span>
            </button>
      );
}

export default HeaderCartButton;