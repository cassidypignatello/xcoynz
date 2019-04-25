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
          <Col
            xs={{ span: 'auto' }}
            lg={{ span: 'auto', offset: 7 }}
            className={`${styles.subheader}`}>
            The ultimate solution for exchanging, spending and receiving payments in cryptocurrencies. Set your own fee, global payments card and more.
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 'auto' }}
            lg={{ span: 'auto', offset: 7 }}
            className={`${styles.description}`}>
            Our solution will address the problem of exchanging fiat to Crypto, Crypto to Crypto and Crypto to fiat, all under one roof, namely the XCOYNZ Exchange. The XCOYNZ Exchange will also address high fees by allowing the Individual to define the fee that they would like to pay for their transaction. It will also accelerate the transfer of Crypto assets back to the Individual’s fiat bank account faster than existing methods, using our custom-built technology known as X-Swift based on a private XCOYNZ Blockchain, with the ultimate goal of being near-instantaneous.<br /><br />
            The XCOYNZ Exchange enables Individuals to set their own fee when exchanging their Crypto assets. This will be based on a recurring annual allowance from the time of first registration, with further loyalty bonuses being awarded based on periodic exchange activity volume.
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 'auto', offset: 2 }}
            lg={{ span: 'auto', offset: 7 }}>
            <Button
              className={styles.button}
              href='#'>
              <p className={`text-uppercase ${styles.buttonText}`}>Read More</p>
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
