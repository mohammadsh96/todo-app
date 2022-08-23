import React from 'react';

// import { Button , Navbar ,Alignment} from "@blueprintjs/core";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../../../context/Theme';
export default class Header extends React.Component{
  static contextType = ThemeContext;
 render(){

   return(<>
                 

   <Navbar bg="dark" variant="dark">
           <Container>
             <Navbar.Brand href="#home">To DO</Navbar.Brand>
             <Nav className="me-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               {/* <Nav.Link href="#features">Features</Nav.Link> */}
               <Button href="#mood" icon="refresh" onClick={this.context.toggleMode} >Mood :{this.context.mode} </Button>
             </Nav>
           </Container>
         </Navbar>
         
   
   </>)
 }



} 

