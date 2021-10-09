import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import './App.css';
import loginImg from './img/login.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// or less ideally
import { Button,variant } from 'react-bootstrap';
import React, {useState} from 'react';
import intializeAutentication from './Firebase/FirebaseInitialize';
import Login from './Components/Register&Login/Login';

intializeAutentication();

const googleProvider = new GoogleAuthProvider();




function App() {
  const [user,setUser] = useState({});
  const auth = getAuth();

  const eventHandelerGoogle = ()=>{
    signInWithPopup (auth,googleProvider)
    .then(result=>{
      // const user = result.user;
      // console.log(user);
      const {displayName,email,photoURL} = result.user;
      const loggedInUser = {
        name:displayName,
        email : email,
        photo:photoURL
      }
      setUser(loggedInUser)
    })
    .catch(error=>{
      console.log(error.message);
    })

  }
  return (
    <div className="App">
     <div className="row">
     <h1 className=" text-primary text-center ">Sign In Information </h1>
       <div className=" col-md-4 p-3">
         <Login></Login>
       
       <p className="text-primary"> Are you new please register</p>
       <p className="text-primary">Already have an Account? </p>
       <Button  variant="primary" onClick={eventHandelerGoogle}>Google SignIn</Button> 
       </div>
       <div className=" col-md-8">
       <img src={loginImg}  alt=""/>
       </div>

     </div>
     
     {
      user.email && <div>
        <h3> Welcome to,{user.name}</h3>
        <img src={user.photo} alt=""/>
         </div>
     }  
    </div>
  );
}

export default App;
