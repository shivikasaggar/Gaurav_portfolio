import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Hero2(props) {
    return (
        <div >
            <Jumbotron className=" jumbotron-fluid p-0  curved" style={{ backgroundColor: "black" }} >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                    <path fill="#343a40" fill-opacity="1" d="M0,320L40,288C80,
                        256,160,192,240,154.7C320,117,400,107,480,106.7C560,107,640,117,720,138.7C800,
                        160,880,192,960,218.7C1040,245,1120,267,1200,256C1280,245,1360,203,1400,181.3L1440,
                        160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,
                        800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,
                        320L0,320Z">
                        </path>
                    </svg>
            <Container fluid={true}>
                    <Row className=" justify-content-center" style={{
                        backgroundColor: "#343a40"
                    }}>
                    <Col md={8} sm={12}>
                            {props.title && <h2 className="display-4 textstyle font-weight-bold">{props.title}</h2>}
                            {props.subtitle && <h2 className="display-6  textstyle font-weight-light">{props.subtitle}</h2>}
                            {props.text && <h3 className="lead   textstyle font-weight-light">{props.text}</h3>}
                         
                        </Col>
                    </Row>
                    
                </Container>
               
            </Jumbotron>
            </div>
    );
}
export default Hero2;
