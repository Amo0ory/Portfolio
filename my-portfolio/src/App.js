import './sass/main.scss';
import Blogs from './components/Pages/Blogs';
import Home from './components/Pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Router>
        <Route path="/" component={Home} exact/>
        <Route path="/blogs" component={Blogs} exact/>
      </Router>
    </div>
    
  );
}

export default App;
