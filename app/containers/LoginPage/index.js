import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

import H2 from 'components/H2'

const LoginPage = () => (
  <Container className="full-height">
    <Row className="align-items-center full-height">
      <Col md={3} className="d-md-block" />
      <Col xs={12} md={6}>
        <Card>
          <Card.Body>
            <Card.Title>
              <H2>Login</H2>
            </Card.Title>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
            </Form>
            <Button variant="secondary" block>
              Login
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="d-md-block" />
    </Row>
  </Container>
)

LoginPage.propTypes = {}

export default LoginPage
