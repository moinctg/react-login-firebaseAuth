import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import React from 'react';
import react, {useState} from 'react';
import {form,} from 'react-bootstrap';
import { Form,Row,Col,Button,varient } from 'react-bootstrap';
import registerImg from '../../img/register.jpg';

import intializeAutentication from '../../Firebase/FirebaseInitialize';

intializeAutentication();

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLogin,setIsLogin] = useState(false);
  const auth = getAuth();

  const toggleLogin= (e)=>{
    setIsLogin(e.target.checked)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  }
  const handlePasswordChange = (e)  => {
    setPassword(e.target.value);
  }
  const handleRegister = e => {
    e.preventDefault();
    if(password.length<6){
      setError('Password will be at least 6 charector ');
      return;
    }
    if(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/.test(password)){
      setError('password should contain atleast one number and one special character ');
      return;
    }
    // console.log(email,password);
  
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      const  {displayName,email,photoURL} = result.user;
      const loggedUser={
        name:displayName,
        email:email,
        photo:photoURL
      }
      setUser(loggedUser)
     
      // const user = result.user;
      // console.log(user);
    
      setError('');
    })
    .catch(error=>{
      setError(error.message);
    })
    
  }
  
    return (
    
    <div className="my-4 p-4">
      
      <div className="row">
        <h4>{error}</h4>
        {
          email &&  <div> 
        <h3 className="text-primary "> Congratulation to,Mr{user.email}</h3>
          </div>
        
        }
    
      <h1 className="  text-center ">Please! {isLogin? 'Login':'Register'} </h1>
        <div className=" col-md-4 p-5">
          
        <Form onSubmit={handleRegister}>
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
      <Form.Check onChange={toggleLogin} label="Already Register" />
    </Col>
  </Form.Group>
<div className="row mb-3 text-danger">{error}</div>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button varient="primary"  type="submit">{isLogin? 'Login':'Register'}</Button>
    </Col>
  </Form.Group>
</Form>
            
</div>

      
       <div className=" col-md-8 p-4">
       <img className="img-fluid" src={registerImg}  alt=""/>
       </div>
       </div>
       </div>
        
    );
};

export default Register;