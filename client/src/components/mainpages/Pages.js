import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import { GlobalState } from '../../GlobaalState';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';

import DetailProduct from './detailProduct/DetailProduct';
import OrderDetails from './history/OrderDetails';
import OrderHistory from './history/OrderHistory';
import Products from './products/Products'
import NotFound from './utils/not_found/NotFound';
export default function Pages() {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />

        <Route path="/register" element={isLogged ? <NotFound /> : <Register />} />
        <Route path="/category" exact element={isAdmin ? <Categories /> : <NotFound />} />
        <Route
          path="/create_product"
          exact
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
        <Route
          path="/edit_product/:id"
          exact
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
        <Route path="/history" exact element={isLogged ? <OrderHistory/> : <NotFound/>} />
        <Route path="/history/:id" exact element={isLogged ? <OrderDetails/> : <NotFound/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
