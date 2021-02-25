import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl"
import Logo from "../img/logo3.png"

export default ()=>{

    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
                 <img src={Logo}/>
          </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Recipes</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
         </Nav>
         <Form inline>
            <FormControl type="text" placeholder="Search recipes" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
         </Navbar>
        </>

    )
}