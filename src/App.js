import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import PaymentForm from './routes/payment-form/payment-form.component';

import { GlobalStyle } from './styles/global.styles';

import { checkUserSession } from './store/user/user.action';
import Footer from './components/footer/footer.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='payment' element={<PaymentForm />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
