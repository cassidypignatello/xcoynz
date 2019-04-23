import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Overview.module.css'

export default class Overview extends Component {
  render() {
    return (
      <Container
        className={styles.container}
        id='overview'>
        <Row>
          <Col className={styles.header}>
            <p className='text-center'>Ecosystem Overview</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.subheader}>
            <p
              className='text-center'
              style={{
                margin: '10px auto 0'
              }}>
              The ultimate solution for exchanging, spending and receiving payments in cryptocurrencies. Set your own fee, global payments card and more.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}
