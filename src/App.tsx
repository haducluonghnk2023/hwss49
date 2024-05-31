import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/NotFound";
import Home from "./components/home/Home";
import Hw1 from "./components/Hw1";
import Hw2 from "./components/Hw2";
import Hw3 from "./components/Hw3";
import Hw4 from "./components/Hw4";
import Hw6 from "./components/Hw6";
import ListUser from "./components/listuser/ListUser";
import UserDetail from "./components/userdetail/UserDetail";
import CustomLink from "./components/customlink/CustomLink";
import HomePage from "./components/homepage/HomePage";
import Account from "./components/Account/Account";
import Admin from "./components/Admin/Admin";

import Product from "./components/Product/Product";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Hw1" element={<Hw1></Hw1>}></Route>
        <Route path="/Contact" element={<Hw2 />} />
        <Route path="/Hw3" element={<Hw3 />} />
        <Route path="/Hw4" element={<Hw4 />} />
        <Route path="/Hw6" element={<Hw6 />} />
        <Route path="/ListUser" element={<ListUser></ListUser>}></Route>
        <Route path="/ListUser/:id" element={<UserDetail />} />
        <Route path="/CustomLink" element={<CustomLink></CustomLink>}></Route>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
