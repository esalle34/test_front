import './App.css';
import { Switch } from 'react-router';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Calculette from "./Calculette";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/calculette">Calculette</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/calculette">
          <Calculette />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
