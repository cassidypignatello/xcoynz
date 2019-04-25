import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Token.module.css'

export default class Token extends Component {
  render() {
    return (
      <Container id='token'>
        <Row className='justify-content-center'>
          <Col
            xs='auto'
            lg={{ span: 6, offset: 1 }}
            className={`${styles.tokenPurpose}`}>
          </Col>
          <Col
            xs='auto'
            lg={{ span: 5, offset: 0 }}
            className={`${styles.tokenProperties}`}>
          </Col>
        </Row>
      </Container>
    )
  }
}
