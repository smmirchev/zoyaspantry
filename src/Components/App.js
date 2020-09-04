import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  FaSearch,
  FaRegSmile,
  FaRegHeart,
  FaAngleDown,
  FaBars,
} from "react-icons/fa";

import Home from "./Home";

class App extends Component {
  constructor() {
    super();
    this.state = { responsiveActive: false };

    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <header className="app-header">
            <button
              className={
                this.state.active
                  ? "responsive-active responsive-btn"
                  : "responsive-btn"
              }
              onClick={this.toggleClass}
            >
              <FaBars size={28} />
            </button>
            <div className={this.state.active ? "responsive-active" : "none"}>
              <ul className="responsive-menu">
                <li>
                  <Link className="h4 font-medium green" to="NewIn">
                    New in
                  </Link>
                </li>
                <li>
                  <Link className="h4 font-medium green" to="BestSellers">
                    Best sellers
                  </Link>
                </li>
                <li>
                  <Link className="h4 font-medium" to="Pantry">
                    Pantry
                  </Link>
                </li>
                <li>
                  <Link className="h4 font-medium purple" to="WholeFoods">
                    Whole Foods
                  </Link>
                </li>
                <li className="h4 font-medium">
                  <Link to="Login">
                    Login <FaRegSmile size={26} className="icons" />
                  </Link>
                </li>
                <li className="h4 font-medium">
                  <Link to="Favourites">
                    Favourites <FaRegHeart size={26} className="icons" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-logo">
              <Link to="/">
                <img src="logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="navigation-top">
              <nav className="nav-menu">
                <ul className="menu">
                  <li>
                    <Link className="h4 font-medium" id="pantry" to="Pantry">
                      Pantry{" "}
                      <FaAngleDown
                        className="fa-angle-down"
                        data-arrow="arrow"
                      />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="#" className="font-medium">
                          Organic Beans &amp; Lentils{" "}
                          <img
                            src="Beans.svg"
                            alt="beans"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Couscous &amp; Pasta{" "}
                          <img
                            src="Grains.svg"
                            alt="grains"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Breakfast Favourites{" "}
                          <img
                            src="breakfast.svg"
                            alt="breakfast"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Salt &amp; Spices{" "}
                          <img
                            src="Salt.svg"
                            alt="salt and pepper"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Sugars, Sweetners &amp; Syrups{" "}
                          <img
                            src="Sugars.svg"
                            alt="sugar drink"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          French Traditional Sauces{" "}
                          <img
                            src="Sauces.svg"
                            alt="sauce"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Superfoods{" "}
                          <img
                            src="Superfoods.svg"
                            alt="superfood"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Flours &amp; Meals{" "}
                          <img
                            src="Flours.svg"
                            alt="flour"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Seeds &amp; Grains{" "}
                          <img
                            src="Seeds.svg"
                            alt="seeds"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="font-medium">
                          Organic Canned Vegetables{" "}
                          <img
                            src="Tomato.svg"
                            alt="tomato"
                            width="35px"
                            height="35px"
                          ></img>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="h4 font-medium purple" to="WholeFoods">
                      Whole Foods
                    </Link>
                  </li>
                  <li>
                    <Link className="h4 font-medium green" to="NewIn">
                      New in
                    </Link>
                  </li>
                  <li>
                    <Link className="h4 font-medium green" to="BestSellers">
                      Best sellers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="account-info">
              <div>
                <FaSearch size={26} />
              </div>
              <div className="login">
                <Link to="Login">
                  <FaRegSmile size={26} />
                </Link>
              </div>
              <div className="favourites">
                <Link to="Favourites">
                  <FaRegHeart size={26} />
                </Link>
              </div>
              <div className="cart">
                <span className="cart-count">
                  <h4>
                    <Link to="MyBag">0</Link>
                  </h4>
                </span>
              </div>
            </div>
          </header>
          <main
            className={
              this.state.active ? "responsive-hide app-content" : "app-content"
            }
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/NewIn">
                <NewIn />
              </Route>
              <Route path="/BestSellers">
                <BestSellers />
              </Route>
              <Route path="/Pantry">
                <Pantry />
              </Route>
              <Route path="/Favourites">
                <Favourites />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/WholeFoods">
                <WholeFoods />
              </Route>
              <Route path="/MyBag">
                <MyBag />
              </Route>
            </Switch>
          </main>
          <footer
            className={
              this.state.active ? "responsive-hide app-footer" : "app-footer"
            }
          >
            <div className="top">
              <div className="item">
                <h1 className="h1 font-medium">Store</h1>
                <div className="menu-footer-container">
                  <ul className="menu">
                    <li>
                      <a className="h4 font-medium" href="/">
                        Pantry
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium" href="/">
                        New products
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium" href="/">
                        Best sellers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <h1 className="h1 font-medium">For customer</h1>
                <div className="menu-footer-container">
                  <ul className="menu">
                    <li>
                      <a className="h4 font-medium" href="/">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium" href="/">
                        Shipping details
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium" href="/">
                        Privacy and Returns
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <h1 className="h1 font-medium">Contact us</h1>
                <div className="menu-footer-container">
                  <ul className="menu">
                    <li>
                      <a className="h4 font-medium small" href="/">
                        Phone:+00 000 000 000
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium small" href="/">
                        Email:email@email.com
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium small" href="/">
                        For wholesale enquiries please <br /> email or call us
                        directly.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <h1 className="h1 font-medium">Follow us</h1>
                <div className="menu-footer-container">
                  <ul className="menu">
                    <li>
                      <a className="h4 font-medium small" href="/">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="h4 font-medium small" href="/">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h4 className="h4 font-medium">PayPal</h4>
              <div className="all-rights">
                <h5 className="h5">All rights reserved © 2020</h5>
                <h5 className="h5 right">
                  Designed and developed by{" "}
                  <a href="/" className="h5 bold">
                    CONCEPT STUDIO
                  </a>
                </h5>
              </div>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

function NewIn() {
  return (
    <div>
      <h2>NewIn</h2>
    </div>
  );
}

function BestSellers() {
  return (
    <div>
      <h2>BestSellers</h2>
    </div>
  );
}

function Pantry() {
  return (
    <div>
      <h2>Pantry</h2>
    </div>
  );
}

function Favourites() {
  return (
    <div>
      <h2>Favourites</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function WholeFoods() {
  return (
    <div>
      <h2>Whole Foods</h2>
    </div>
  );
}

function MyBag() {
  return (
    <div>
      <h2>MyBag</h2>
    </div>
  );
}

export default App;
