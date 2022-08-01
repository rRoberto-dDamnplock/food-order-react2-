import React, {useReducer} from 'react';
import CartCtx from './cart-context';

const defaultCartState = {
      items: [],
      totalAmount: 0
}

//// this is the cart reducer that makes a check if there is an item or if it is added.
const cartReducer = (state, action) => {
      if (action.type === 'ADD') {
        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;
    
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
      }
    
      return defaultCartState;
    };
function Cartprovider(props) {
///the cartState is the initial state that is being used. That and the defaultCartState which is referenced up there.  
const [cartState, dispatchCartAction] =useReducer(cartReducer, defaultCartState)

const addItemToCart = item => {
dispatchCartAction({type: 'ADD', item: item})
}

const removeItemToCart = id => {
      dispatchCartAction({type: 'REMOVE', id: id})
}

      const CartContext = {
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemToCart,
            removeItem: removeItemToCart,
      }
      return<CartCtx.Provider value={CartContext}>{props.children}</CartCtx.Provider>
}

export default Cartprovider;