import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

import ParticleContainer from './components/ParticleContainer'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'shivika',
          
            home: {
                title: 'Gaurav Maggu',
                subtitle: '- BI Developer',
                text: ''
            },
            about: {
                title: 'About Me'
            },
            contact: {
                title: 'Contact Me'
            }
        }
    }
    render() {
        return (
           
                <Container className="p-0 " fluid={true}>
                    <Navbar className="border-bottom" bg="dark" fixed="top" variant="dark" expand="lg">
                        <Navbar.Brand >GAURAV MAGGU</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto" >
                                <Button variant="secondary"><a style={{ color: "white" }} href="./src/assets/files/Gaurav-Power BI Developer.pdf" download> Download CV</a></Button>

                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
                <ParticleContainer/>
                
                <Home
                    title={this.state.home.title}
                    subtitle={this.state.home.subtitle}
                    text={this.state.home.text}
                />
                <About
                    title={this.state.about.title}
                />
              
            </Container>
            
            
            
        );
    }

}

export default App;
