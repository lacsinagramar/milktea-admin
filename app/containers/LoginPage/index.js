import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useFormik } from 'formik'

import H2 from 'components/H2'

import { login } from './queries'

const LoginPage = ({ history }) => {
  const [buttonLoading, setButtonLoading] = useState(false)
  const { values: formValues, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        setButtonLoading(true)
        const { data } = await login(values)

        if (data.token) {
          localStorage.setItem('session', JSON.stringify(data))
          history.push('/dashboard')
        }
      } catch (err) {
        setButtonLoading(false)
      }
    },
  })

  useEffect(() => {
    const session = localStorage.getItem('session')
    if (session) {
      history.push('/dashboard')
    }

    return () => {
      setButtonLoading(false)
    }
  }, [])

  return (
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
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
              <Button
                onClick={handleSubmit}
                disabled={buttonLoading}
                variant="secondary"
                block
              >
                {buttonLoading ? 'Loading...' : 'Login'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-md-block" />
      </Row>
    </Container>
  )
}

LoginPage.propTypes = {
  history: PropTypes.object,
}

export default LoginPage
