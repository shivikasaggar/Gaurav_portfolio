import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Hero(props) {
    return (
        <div >
        <Jumbotron className=" jumbotron-fluid p-0  curved" style={{ backgroundColor:"black" }} >
            <Container fluid={true}>
                <Row className="content justify-content-center py-5">
                    <Col md={8} sm={12}>
                            {props.title && <h2 className="display-4 textstyle font-weight-bold">{props.title}</h2>}
                            {props.subtitle && <h2 className="display-6  textstyle font-weight-light">{props.subtitle}</h2>}
                            {props.text && <h3 className="lead   textstyle font-weight-light">{props.text}</h3>}
                         
                        </Col>
                    </Row>
                    
                </Container>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#000000" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,138.7C320,171,
                                    400,245,480,256C560,267,640,213,720,181.3C800,149,880,139,960,144C1040,149,1120,171,1200,
                        154.7C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,
                        320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                                </path>
                            </svg>
            </Jumbotron>
            </div>
    );
}
export default Hero;
