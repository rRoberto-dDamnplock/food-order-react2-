import React, {useContext} from 'react';
import CartCtx from '../../store/cart-context';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartItem from './CartItem.js'

function Cart(props) {
const cartItemRemoveHandler = id => {
      cartContext.removeItem(id)
};
const cartItemAddHandler = item => {
      cartContext.addItem({...item, amount: 1})
}
const cartContext = useContext(CartCtx)
const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
const hasItems = cartContext.items.length > 0;

      const cartItems = <ul className={classes['cart-items']}>  {cartContext.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}</ul>;
      
      
    
      return (
            <Modal onClose={props.onClose}>
                  {cartItems}
                  <div className={classes.total}>
                        <span>total amount</span>
                  <span>{totalAmount}</span>
                  </div>
                  <div className={classes.actions}>
                        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                       { hasItems && <button className={classes.button}>Order</button>} 
                  </div>
            </Modal>
      );
}

export default Cart;