import Header from './Header'; //Include Header
import Footer from './Footer';
import Home from './Home';
import Checkout from './CheckoutPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './Error';
import ProductView from './ProductView';
import { useState } from 'react';

function App() {
  
  const [cartList, setCartList] = useState([]);

  return (
    <div className="App">
      <Header cartList={cartList}></Header>
      <Routes>
        <Route path='/' element={<Home cartList={cartList} setCartList={setCartList} />} />
        <Route path='/:productID' element={<ProductView cartList={cartList} setCartList={setCartList} />} />
        <Route path='*' element={<Error />} />
        <Route path='/checkout' element={<Checkout cartList={cartList} />} />
      </Routes>
      <Footer cartList={cartList} setCartList={setCartList} />
    </div>
  );
}

export default App;
