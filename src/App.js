import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home'
import About from './Pages/About'
import Navigations from './Pages/Navigations'

function App() {
  return (
    <div className="App" style={{ background : 'red', width : '100vw', height: '100vh', overflow: 'hidden'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: 100}}>
          <Navigations />
      </div>
        
         <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
    </Router>
    </div>
  );
}

export default App;
