import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SIgnUp from './components/pages/SIgnUp';





function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/sign-up" exact component={SIgnUp}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
