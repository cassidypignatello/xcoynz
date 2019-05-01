import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Roadmap.module.css'
import ExchangeTimeline from './ExchangeTimeline.js'

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
    return (
      <Container
        className={styles.roadmap}
        id='roadmap'>
        <Row className='justify-content-center'>
          <Col>
            <p className={styles.title}>Our Roadmap</p>
          </Col>
        </Row>
        <ExchangeTimeline />
        <Row className={`${styles.navigation} justify-content-center`}>
          <Col lg='auto'>
            <div className={this.state.active === 'Exchange' ? `${styles.active}` : null}>
              <p
                data-name='Exchange'
                className={`${styles.navlink}`}
                onClick={this.handleClick}>
                Exchange Roadmap
              </p>
            </div>
          </Col>
          <Col lg='auto'>
            <div className={this.state.active === 'SAW' ? `${styles.active}` : null}>
              <p
                data-name='SAW'
                className={styles.navlink}
                onClick={this.handleClick}>
                SAW Roadmap
              </p>
            </div>
          </Col>
          <Col lg='auto'>
            <div className={this.state.active === 'Payment Gateway' ? `${styles.active}` : null}>
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
