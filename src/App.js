import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
        <Switch>
            <Route>
                <Login></Login>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
