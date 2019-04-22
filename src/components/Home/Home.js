import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Row>
          <Col className={styles.header}>
            A Cryptocurrency <br />Platform
          </Col>
        </Row>
        <Row className={styles.subheaderRow}>
          <Col className={styles.subheader}>
            Including an Exchange that allows you to Set Your Own Fee… <br />BUT that's not all……
          </Col>
        </Row>
        <Row className={`${styles.buttonRow} justify-content-xs-center justify-content-lg-flex-start`}>
          <Col xs={12} lg='auto'>
            <Button
              className={styles.button}
              href='#'>
              <p className={styles.buttonText}>New to Crypto Investment</p>
            </Button>
          </Col>
          <Col xs='auto' lg='auto'>
            <div className={styles.videoButton}></div>
          </Col>
          <Col xs='auto'>
            <div className={styles.videoButtonText}>Watch Our Video</div>
          </Col>
        </Row>
      </Container>
    )
  }
}
