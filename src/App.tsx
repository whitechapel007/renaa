import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/Button/index";
import { HookInput } from "./components/BasicInputField";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword/index";
import Footer from "./components/Footer";
import AccessMore from "./components/AccessMore";
import HomePage from "./pages/HomePage/index";
import Bookmark from "./pages/Bookmark/index";
import PostProduct from './pages/PostProduct/index';

function App() {
  return (
    <div className="relative">
      <Router>
        <Header />
        <main>
          <Route exact path={"/"} component={SignUp} />
          <Route exact path={"/forget_password"} component={ForgetPassword} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/change_password"} component={ChangePassword} />
          <Route exact path={"/home"} component={HomePage} />
          <Route exact path={"/bookmark"} component={Bookmark} />
        <Route exact path={"/post_product"} component={PostProduct} />

        </main>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
