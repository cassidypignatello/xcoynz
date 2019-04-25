import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <Container
        id='home'
        className={`${styles.container}`}>
        <Row>
          <Col
            lg={{ span: 'auto', offset: 1 }}
            className={`${styles.header}`}>
            <p className='text-center text-lg-left'>A Cryptocurrency <br />Platform</p>
          </Col>
        </Row>
        <Row className={`${styles.subheaderRow} justify-content-lg-start justify-content-md-center`}>
          <Col
            lg={{ span: 'auto', offset: 1 }}
            className={styles.subheader}>
            <p className='text-center text-lg-left'>Including an Exchange that allows you to Set Your Own Fee… <br />BUT that's not all……</p>
          </Col>
        </Row>
        <Row className={`${styles.buttonRow} justify-content-xs-center justify-content-lg-flex-start`}>
          <Col
            xs={{ span: 'auto', offset: 2 }}
            md={{ span: 'auto', offset: 1 }}
            lg={{ span: 'auto', offset: 1 }}>
            <Button
              className={styles.button}
              href='#'>
              <p className={styles.buttonText}>New to Crypto Investment</p>
            </Button>
          </Col>
          <Col
            xs={{ span: 'auto', offset: 3 }}
            md={{ span: 'auto', offset: 0 }}
            lg={{ span: 'auto', offset: 0 }}>
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
