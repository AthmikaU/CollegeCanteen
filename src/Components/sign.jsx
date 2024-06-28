import React, { useState } from 'react';
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [key, setKey] = useState('student');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleLogin = (event) => {
      // event.preventDefault();
      alert('Login form submitted!');
    };
  
    return (
      <>
        <Button onClick={handleShow} variant="danger" >
            <i className='bi bi-person fs-3'></i>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              id="login-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="student" title="Student">
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="studentEmail">
                    <Form.Label>USN</Form.Label>
                    <Form.Control type="text" placeholder="Enter USN" required />
                  </Form.Group>
                  <Form.Group controlId="studentEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>
                  <Form.Group controlId="studentPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                  </Form.Group>
  
                  <Button variant="success" type="submit" className="mt-3">
                    Login as Student
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="admin" title="Admin">
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="adminUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" required />
                  </Form.Group>
                  
                  <Form.Group controlId="adminEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>
  
                  <Form.Group controlId="adminPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                  </Form.Group>
  
                  <Button variant="danger" type="submit" className="mt-3">
                    Login as Admin
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default LoginModal;