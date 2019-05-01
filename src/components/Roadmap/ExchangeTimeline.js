import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './ExchangeTimeline.module.css'
import timeline from '../../assets/images/exchange-timeline.png'
import TimelineMarker from './TimelineMarker.js'

export default class ExchangeTimeline extends Component {
  render() {
    return (
      <Row>
        <Col
          xs='auto'
          md='auto'
          lg='auto'>
          <Col
            xs={{ span: 4, offset: 1 }}
            sm={{ span: 4, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            className={styles.timelineContainer}>
            <TimelineMarker
              date='Apr 2019 to Sep 2019'
              phase='Phase 1 Development'
              description='Multi directional exchange features. User defined fees. Future orders.'
            />
          </Col>
          <Col
            xs={{ span: 3, offset: 5 }}
            sm={{ span: 3, offset: 5 }}
            md={{ span: 3, offset: 5 }}
            lg={{ span: 2, offset: 5 }}
            className={`${styles.timelineContainer} ${styles.mainDevelopment}`}>
            <Row>
              <Col className={styles.date}>
                <p>Jan 2020</p>
              </Col>
            </Row>
            <Row>
              <Col className={styles.phase}>
                <p>XCOYNZ Exchange Main Development Complete</p>
              </Col>
            </Row>
          </Col>
          <img src={timeline} className='img-fluid' />
        </Col>
      </Row>
    )
  }
}
