import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AccountComponent from "./pages/AccountComponent";
import CardsComponent from "./pages/CardsComponent";
import ProtectedRoute from './ProtectedRoute';
import { useState } from "react";

function App() 
{
  const [isAuth, setIsAuth] = useState(false);
    
  function login() 
  {
    setIsAuth(true);
  }
  function logout() {
    setIsAuth(false);
  }
 
  return (
    <div className="ui container">
      <Router>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts (Protected)</Link>
          </li>
          <li>
            <Link to="/cards">Cards (UnProtected)</Link>
          </li>
        </ul>
        {isAuth ? (<><div className="ui message brown"><Nav />You are logged in..</div><button className="ui btn btn-alert" onClick={logout}>Logout</button></>):(<><div className="ui message violet">You are logged out..</div><button className="ui button blue" onClick={login}>Login</button></>)}
        
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/cards" component={CardsComponent} />
          <ProtectedRoute path="/accounts" component={AccountComponent} auth={isAuth}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
