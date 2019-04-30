import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Overview.module.css'
import exchangeIcon from '../../assets/images/exchange-icon.png'
import EcosystemService from './EcosystemService.js'

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
          <EcosystemService
            containerStyle={styles.exchange}
            icon={exchangeIcon}
            title='Exchange'
            subtitleWidth='370px'
            subtitleHeight='42px'
            subtitle='Facilitating the fast exchange of various crypto and fiat currencies.'
            content1='Simplify direct transfer to bank accounts'
            content2='Scheduling of recurrent payments'
            content3='Let users set their own fees'
            content4='A cryptocurrency novice can enter the market easily with XCOYNZ streamlined services, with suggestions'
            content4Width='313px'
            content5='Veteran crypto holders can easily exchange fiat/crypto and benefit from the ‘set your own fee’ mechanic.'
            content5Width='322px'
          />

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
