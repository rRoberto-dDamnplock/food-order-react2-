
  import React, {useState} from "react";
import Header from "./Components/LAYOUT/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import Cartprovider from "./store/Cart-provider";
function App() {
const [cartIsShown, setCartIsShown] = useState(false)

const showCardHandlerFx = () => {
  setCartIsShown(true)
}

const hideCartHadnler = () => {
  setCartIsShown(false)
}


  return (
<Cartprovider>
  {cartIsShown && <Cart onClose={hideCartHadnler}/>}
<Header  onShowCart={showCardHandlerFx} />
<main>
  <Meals/>
</main>
</Cartprovider>

  );
}

export default App;
