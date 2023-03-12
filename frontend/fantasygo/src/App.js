import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Index from "./component/Index";
import Register from "./component/Register";
import Login from "./component/Login";
import Highest from "./component/Highest";
import Lowest from "./component/Lowest";
import Bonus from "./component/Bonus";
import Error from "./component/Error";

const App = () => (
  <BrowserRouter>
  <div className="navbar navbar-expand-lg bg-light">
    <div className="container">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/register">Register</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/login">Login</Link>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Total Points
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/highest">Highst to Lowest</Link></li>
            <li><Link className="dropdown-item" to="lowest">Lowest to Highest</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/gwbonuspoints">GW - Bonus Points</Link>
      </li>
        <button className="btn btn-outline-success" type="">Random Shuffle</button>
    </ul>
    </div>
    </div>
  </div>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/highest" element={<Highest />} />
      <Route path="/lowest" element={<Lowest />} />
      <Route path="/gwbonuspoints" element={<Bonus />} />
      <Route component={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
