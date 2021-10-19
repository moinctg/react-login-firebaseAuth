import {GoogleAuthProvider,getAuth,signInWithPopup,GithubAuthProvider, FacebookAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import loginImg from '../../img/login.jpg';
import react, {useState} from 'react';
import {

  Link
} from "react-router-dom";

import { Form,Row,Col,Button,varient } from 'react-bootstrap';

import intializeAutentication from '../../Firebase/FirebaseInitialize';

intializeAutentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user,setUser] = useState({});
  const [error,setError] = useState('');
  const auth = getAuth();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  }
  const handlePasswordChange = (e)  => {
    setPassword(e.target.value);
  }

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
  const eventHandelerGithub =()=>{

    signInWithPopup (auth,githubProvider)
    .then(result=>{
      // const user = result.user;
      // console.log(user)
      const {displayName,photoURL} = result.user;
      const loggedInUser={
        name:displayName,
        photo:photoURL
      }
      setUser(loggedInUser);
      setError('');

    })
    .catch(error=>{
     setError(error.message) ;
    })
  }

  const eventHandelerSignIn = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const {displayName,photoURL} = result.user;
      const loggedInUser={
        name:displayName,
        photo:photoURL
      }
      setUser(loggedInUser);

    })
    .catch(error=>{
     setError(error.message) ;
    })
  }

    return (
      <div className="my-4 p-4">
      
      <div className="row">
      <h1 className="  text-center ">Sign In Information </h1>
      {
        email && 
        <h3>welcome to, {user.email}</h3>
      }
    
        <div className=" col-md-4 p-5">
          
        <Form onSubmit={eventHandelerSignIn}>
  <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email"  required=""/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={3}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required="" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button varient="primary"  type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
            <p className="text-primary"> Are you new please register</p>
            <p className="text-primary">Already have an Account? <Link to="/login"> Login</Link> </p>
            <Button className="m-3" variant="primary" onClick={eventHandelerGoogle}>Google Signin</Button>

            <Button className="m-3" variant="success" onClick={eventHandelerGithub}>Github Signin</Button>
</div>

      
       <div className=" col-md-8 p-4">
       <img className="img-fluid" src={loginImg}  alt=""/>
       </div>
        </div>
          

{
      user.email && <div>
        <h3> Welcome to,{user.name}</h3>
        <img src={user.photo} alt=""/>
         </div>
     }  

     {
       user.name && <div>
         <h3>Welcome to,{user.name}</h3>
         <img src={user.photo} alt=""/>
         </div>
     }


        </div>
    );
};

export default Login;