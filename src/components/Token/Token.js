import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Token.module.css'

export default class Token extends Component {
  render() {
    return (
      <Container id='token'>
        <Row className='justify-content-center'>
          <Col
            xs='auto'
            lg={{ span: 6 }}
            className={`${styles.purpose}`}>
            <p className={styles.title}>Token Purpose & Appeal</p>
            <p className={styles.description}>
              The purpose of the XCZ token is to promote features that elevate functionality of the day-to-day XCOYNZ business, in turn driving the business forward and hence increasing the value of the token by ensuring that it has a fundamental use.<br /><br />
              Individuals will reap the benefits of having XCZ tokens ready to be used for exchange fee discounts and a faster, streamlined withdrawal mechanism. Over the next 18 months, there will be a drive to future-proof the market share that XCOYNZ captures, ensuring optimum level of token recycling safeguards business expansion and ultimately enhances mass appeal for the token.<br /><br />
              To this effect, XCOYNZ will implement a programme to burn a set proportion of collected tokens, writing off a fixed share of our business profits with limits and frequency to be decided once all components of the platform have been launched and the business if fully functional.
            </p>
          </Col>
          <Col
            xs='auto'
            lg={{ span: 6 }}
            className={`${styles.properties}`}>
          </Col>
        </Row>
      </Container>
    )
  }
}
