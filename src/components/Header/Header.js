import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Header(props) {
    return (
    <Row className="header">
        <Col md>
     <span class="logo">JMJ</span> <span class="coname"> {props.website} </span>
     
     </Col>
     <Col>
     <Button className="mx-1"><Link to="/">Home</Link></Button>
     <Button className="mx-1"><Link to="/about">About</Link></Button>
     <Button className="mx-1"><Link to="/contact">Contact</Link></Button>
     </Col>
     <Col></Col>
    </Row>
    );
}
export default Header;