import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './FAQs.module.css'

export default class FAQs extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Row>
          <Col>
            <p className={styles.title}>FAQS</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.menu}>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Col>
          <Col className={styles.questions}>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
