import react from "react";
const CartCtx = react.createContext({
      items: [],
      totalAmount: 0,
      addItem: (item) =>{},
      removeItem: (id) => {}
})

export default CartCtx;