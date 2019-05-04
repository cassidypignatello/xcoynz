import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Roadmap.module.css'
import ExchangeTimeline from './ExchangeTimeline.js'
import SAWTimeline from './SAWTimeline.js'
import PaymentTimeline from './PaymentTimeline.js'

export default class Roadmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Exchange'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      active: e.target.dataset.name
    })
  }

  render() {
    const { active } = this.state
    let timeline;
    if (active === 'Exchange') {
      timeline = <ExchangeTimeline />
    } else if (active === 'SAW') {
      timeline = <SAWTimeline />
    } else if (active === 'Payment Gateway') {
      timeline = <PaymentTimeline />
    }
    return (
      <Container
        className={styles.roadmap}
        id='roadmap'>
        <Row className='justify-content-center'>
          <Col>
            <p
             className={active === 'Exchange' ?
             `${styles.title} ${styles.exchangeTitle}` :
             `${styles.title}` ||
             active === 'SAW' ?
             `${styles.title} ${styles.SAWTitle}` :
             `${styles.title}` ||
              active === 'Payment Gateway' ?
              `${styles.title} ${styles.paymentTitle}` :
              `${styles.title}`}>
             Our Roadmap
            </p>
          </Col>
        </Row>
        {timeline}
        <Row className={`${styles.navigation} justify-content-center`}>
          <Col
            xs='auto'
            sm='auto'
            md='auto'
            lg='auto'>
            <div className={active === 'Exchange' ? `${styles.active}` : null}>
              <p
                data-name='Exchange'
                className={`${styles.navlink}`}
                onClick={this.handleClick}>
                Exchange Roadmap
              </p>
            </div>
          </Col>
          <Col
            xs='auto'
            sm='auto'
            md='auto'
            lg='auto'>
            <div className={active === 'SAW' ? `${styles.active}` : null}>
              <p
                data-name='SAW'
                className={styles.navlink}
                onClick={this.handleClick}>
                SAW Roadmap
              </p>
            </div>
          </Col>
          <Col
           xs='auto'
           sm='auto'
           md='auto'
           lg='auto'>
            <div className={active === 'Payment Gateway' ? `${styles.active}` : null}>
              <p
                data-name='Payment Gateway'
                className={styles.navlink}
                onClick={this.handleClick}>
                Payment Gateway Roadmap
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
