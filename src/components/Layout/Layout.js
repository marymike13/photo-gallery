import { Button, Card,Row,Col } from 'react-bootstrap';
import React from 'react';
import reactDom from 'react-dom';

class Layout extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = { 
           response: [] };
    }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/photos/?_limit=12')
        .then(response => response.json())
        .then(json => {
          this.setState({ response: json })
          console.log(json)
        })
    }
    render() {
      console.log(this.state.response)
    return (
        <>
            <Row>
        {this.state.response.map(item => {
          return (
               <Card style={{width:'18rem' }} className ='col-md-3'>
              <Card.Img variant="top" src=  {item.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
   
                </Card.Text>
                <Button variant="primary">Read more >></Button>
              </Card.Body>
            </Card>
           
          )
        })}
        </Row>
        </>
    );
}
}

export default Layout;
