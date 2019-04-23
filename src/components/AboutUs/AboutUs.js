import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './AboutUs.module.css'

export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            xs={{ span: 'auto', offset: 2 }}
            lg={{ span: 'auto', offset: 7 }}
            className={`${styles.header}`}>
            About Us
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}
