import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import React from 'react';
import react, {useState} from 'react';
import {form,} from 'react-bootstrap';
import { Form,Row,Col,Button,varient } from 'react-bootstrap';
import registerImg from '../../img/register.jpg';

import intializeAutentication from '../../Firebase/FirebaseInitialize';

intializeAutentication();

const Register = () => {
  const [email,setEmail] = useState({});
  const [password,setPassword] = useState({});
  const auth = getAuth();

  

  const handleEmailChange = e => {
    setEmail(e.target.Value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.Value);
  }
  const handleRegister = e => {
    console.log(email,password);
  
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    e.preventDefault();
  }
  
    return (
    
    <div className="my-4 p-4">
      
      <div className="row">
      <h1 className="  text-center ">Plsease! Register </h1>
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
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button varient="primary"  type="submit">Register</Button>
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