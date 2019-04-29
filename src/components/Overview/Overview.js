import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Overview.module.css'
import exchangeIcon from '../../assets/images/exchange-icon.png'
import checkmark from '../../assets/images/orange-check.png'

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
        <Row className={`${styles.row} justify-content-center`}>
          <Col
            xs='auto'
            className={styles.exchange}>
            <img
              src={exchangeIcon}
              style={{
                position: 'relative',
                left: '-117px'
              }}
            />
            <Row style={{ marginTop: '-115px' }}>
              <Col lg='auto' className={styles.exchangeTitle}>
                <p>Exchange</p>
              </Col>
            </Row>
            <Row>
              <Col lg='auto' className={styles.exchangeSubtitle}>
                <p>Facilitating the fast exchange of various crypto and fiat currencies.</p>
              </Col>
            </Row>
            <Row style={{ marginTop: '30px' }}>
              <Col lg='auto'>
                <img src={checkmark} />
              </Col>
              <Col className={styles.content}>
                <p>Simplify direct transfer to bank accounts</p>
              </Col>
            </Row>
            <Row>
              <Col lg='auto'>
                <img src={checkmark} />
              </Col>
              <Col className={styles.content}>
                <p>Scheduling of recurrent payments</p>
              </Col>
            </Row>
            <Row>
              <Col lg='auto'>
                <img src={checkmark} />
              </Col>
              <Col className={styles.content}>
                <p>Let users set their own fees</p>
              </Col>
            </Row>
            <Row
              className={styles.useCases}
              style={{ marginTop: '19px' }}>
              <Col>
                <p>Use Cases:</p>
              </Col>
            </Row>
            <Row>
              <Col lg='auto'>
                <img src={checkmark} />
              </Col>
              <Col className={styles.content}>
                <p style={{ width: '313px' }}>A cryptocurrency novice can enter the market easily with XCOYNZ streamlined services, with suggestions</p>
              </Col>
            </Row>
            <Row>
              <Col lg='auto'>
                <img src={checkmark} />
              </Col>
              <Col className={styles.content}>
                <p style={{ width: '328px' }}>Veteran crypto holders can easily exchange fiat/crypto and benefit from the ‘set your own fee’ mechanic.</p>
              </Col>
            </Row>
          </Col>

          <Col
            xs='auto'
            className={styles.saw}>
          </Col>
        </Row>
        <Row className={`${styles.row} justify-content-center`}>
          <Col
            xs='auto'
            className={styles.paymentGateway}>
          </Col>
          <Col
            xs='auto'
            className={styles.smartCard}>
          </Col>
        </Row>
      </Container>
    )
  }
}
