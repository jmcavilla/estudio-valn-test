import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route  path="/" component={HomeScreen}/>
            <Route path="/login" component={AuthScreen}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
