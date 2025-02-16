import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Menu } from "./pages/Menu/Menu";
import { LoginAndSignUp } from "./pages/loginAndSignUp/loginAndSignUp";
import ShopingCart from "./components/ShoupingCart/ShopingCart";
import FilterByQatigory from "./components/FilterByQatigory/FilterByQatigory";
import { SingleProPage } from "./pages/SingleProPage/SingleProPage";
import FavoriteDishes from "./components/FavoriteDishes/FavoriteDishes";
import ClientAccount from "./components/Account/ClientAccount";
import './styles/clientindex.css'
import Shopingcartpage from "./pages/shopingcart/Shopingcartpage";
import OrderSuccess from "./components/Ordersuccess/OrderSuccess";
import { OrderDetails } from "./components/Orderdetails/Orderdetails";



function ClientRoutes() {
  return (
    <div className="clientapp">
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<LoginAndSignUp />} />
      <Route path="/shoupingCart" element={<Shopingcartpage />} />
      <Route path="/category/:category" element={<FilterByQatigory/>} />
      <Route path="/product/:id" element={<SingleProPage />} />
      <Route path="/favorite" element={<FavoriteDishes />} />
      <Route path="/myaccount" element={<ClientAccount />} />
      <Route path="/orderSuccess" element={<OrderSuccess />} />
      <Route path="/OrderDetails" element={<OrderDetails />} />


    </Routes>
    </div>
  );
}

export default ClientRoutes;
