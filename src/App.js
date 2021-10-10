
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button,variant } from 'react-bootstrap';
import Login from './Components/Register&Login/Login';
import Register from './Components/Register&Login/Register';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';


function App() {
  
  return (

          <Router>
           <Header></Header>
           <Switch>
             <Route exact path="/">
              <Home></Home>
             </Route>
             <Route  path="/home">
              <Home></Home>
             </Route>
             <Route  path="/about">
              <About></About>
             </Route>
             <Route   path="/contact">
              <Contact></Contact>
             </Route>
             <Route  path="/register">
              <Register></Register>
             </Route>
             <Route path="/login">
              <Login></Login>
             </Route>
             
             <Route  path="*">
              <NotFound></NotFound>
             </Route>
             
           </Switch>
           <Footer></Footer>
         </Router>
         
        
      
    

     
    
  );
}

export default App;
