import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './Timeline.module.css'
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
            xs={{ span: 6, offset: 1 }}
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
            xs={{ span: 4, offset: 5 }}
            sm={{ span: 3, offset: 5 }}
            md={{ span: 3, offset: 5 }}
            lg={{ span: 2, offset: 5 }}
            className={`${styles.timelineContainer} ${styles.mainDevelopment}`}>
            <TimelineMarker
              date='Jan 2020'
              phase='XCOYNZ Exchange Main Development Complete'
            />
          </Col>
          <Col
            xs={{ span: 4, offset: 7 }}
            sm={{ span: 3, offset: 7 }}
            md={{ span: 3, offset: 8 }}
            lg={{ span: 3, offset: 7 }}
            className={`${styles.timelineContainer} ${styles.phaseTwoDeployment}`}>
            <TimelineMarker
              date='May 2020'
              phase='Phase 2 Deployment'
            />
          </Col>
          <img
            src={timeline}
            className={`${styles.exchangeTimeline} img-fluid`}
            alt=''
          />
          <Col
            xs={{ span: 4, offset: 2 }}
            sm={{ span: 3, offset: 2 }}
            md={{ span: 2, offset: 2 }}
            lg={{ span: 2, offset: 2 }}
            className={styles.timelineContainer}>
            <TimelineMarker
              date='Nov 2019'
              phase='Phase 1 Deployment'
            />
          </Col>
          <Col
            xs={{ span: 6, offset: 4 }}
            sm={{ span: 4, offset: 5 }}
            md={{ span: 3, offset: 5 }}
            lg={{ span: 3, offset: 5 }}
            className={`${styles.timelineContainer} ${styles.phaseTwoDevelopment}`}>
            <TimelineMarker
              date='Jan 2020 to Apr 2020'
              phase='Phase 2 Development'
              description='Additional currencies.'
            />
          </Col>
          <Col
            xs={{ span: 5, offset: 8 }}
            sm={{ span: 4, offset: 8 }}
            md={{ span: 3, offset: 8 }}
            lg={{ span: 3, offset: 8 }}
            className={`${styles.timelineContainer} ${styles.exchangeComplete}`}>
            <TimelineMarker
              date='Jul 2020'
              phase='XCOYNZ Exchange Complete'
            />
          </Col>
        </Col>
      </Row>
    )
  }
}
