import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Overview.module.css'
import exchangeIcon from '../../assets/images/exchange-icon.png'
import sawIcon from '../../assets/images/saw-icon.png'
import paymentGatewayIcon from '../../assets/images/payment-gateway-icon.png'
import smartCardIcon from '../../assets/images/smart-card-icon.png'
import EcosystemService from './EcosystemService.js'

export default class Overview extends Component {
  render() {
    return (
      <Container
        className={styles.container}
        id='overview'>
        <Row>
          <Col>
            <p className={`${styles.header} text-center`}>Ecosystem Overview</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
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
        <Row className={`${styles.row} justify-content-around`}>
          <EcosystemService
            containerStyle={styles.exchange}
            icon={exchangeIcon}
            iconLeft='-130px'
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
            useCaseMarginTop='19px'
          />
          <EcosystemService
            containerStyle={styles.saw}
            icon={sawIcon}
            title='SAW (Smart Algorithm Wallet)'
            subtitleWidth='418px'
            subtitleHeight='46px'
            subtitle='AI-powered, the SAW allows a user to better manage their cryptoassets and make use of them in daily life.'
            content1='Supports multiple cryptocurrencies'
            content2='Algorithmically determines best cryptos to exchange for any spend'
            content2Width='336px'
            content3Display='none'
            content4='Crypto holders can stay informed and move with confidence without heavy research, with SAW insights suggesting best routes for investment, divestment and spend.'
            content5Display='none'
            useCaseMarginTop='31px'
          />
        </Row>
        <Row className={`${styles.row} justify-content-around`}>
          <EcosystemService
            containerStyle={styles.paymentGateway}
            icon={paymentGatewayIcon}
            title='Payment Gateway'
            subtitleWidth='346px'
            subtitleHeight='46px'
            subtitle='The missing link between online merchants/retailers and crypto participants'
            content1='Simple API to allow online retailers to accept crypto payments for goods and services.'
            content1Width='350px'
            content2='Cryptocurrency will only replace traditional payment methods when it is established as simple and beneficial to adopt'
            content2Width='338px'
            content3Display='none'
            content4='An online retailer can increase their customer base by accepting crypto payments with XCOYNZ, without worrying about additional legal obligations.'
            content5='Merchants can make use of the instant settlement of fiat to avoid any risk of volatility that comes with crypto acceptance.'
            useCaseMarginTop='31px'
          />
          <EcosystemService
            containerStyle={styles.smartCard}
            icon={smartCardIcon}
            iconLeft='-141px'
            title='Smart Card'
            subtitleWidth='414px'
            subtitleHeight='42px'
            subtitle='Contactless payment cards for crypto payments and the withdrawal of fiat from ATMs.'
            content1='User can pre-load crypto assets into a linked wallet and spend them anywhere a traditional card is accepted.'
            content2='Cryptocurrency will only replace traditional payment methods when it is established as simple and beneficial to adopt'
            content2Width='338px'
            content3Display='none'
            content4='A crypto-asset holder can enjoy a higher level of liquidity and instant access to crypto assets as fiat equivalent for typical card payments, without having to log into an exchange and process a withdrawal'
            content5Display='none'
            useCaseMarginTop='9px'
          />
        </Row>
      </Container>
    )
  }
}
