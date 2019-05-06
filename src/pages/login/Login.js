import React, {Component} from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap'
import './styles.css'

class Login extends Component{

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col md="auto" style={{displayInline: 'block',verticalAlign: 'middle'}}>
                <Card style={{ verticalAlign: 'middle', width: '18rem', display: 'flex',alignItems: 'center',flexWrap: 'wrap'}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        )
    }

}

export default Login