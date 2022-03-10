import {Movie} from "./components/singlemovie";
import HomeMovies  from "./Containers/Movies";
import {BrowserRouter as Router,Route} from "react-router-dom";
import SignIn from './Containers/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import RootContext from "./RootContext";

export function App(props) 
{
  console.log(props);
  
  return (
    <RootContext>
    <Router>

      <ProtectedRoute exact path="/">
        <HomeMovies />
      </ProtectedRoute>

      <Route exact path="/login">
        <SignIn />
      </Route>

    </Router>
    </RootContext>
  );
}

