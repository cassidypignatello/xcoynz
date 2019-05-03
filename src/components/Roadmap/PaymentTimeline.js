import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './Timeline.module.css'
import timeline from '../../assets/images/payment-timeline.png'
import TimelineMarker from './TimelineMarker.js'

export default class PaymentTimeline extends Component {
  render() {
    return (
      <Row>
        <Col
          xs='auto'
          md='auto'
          lg='auto'>
          <Col
            xs={{ span: 5, offset: 1 }}
            sm={{ span: 4, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            className={`${styles.timelineContainer} ${styles.paymentPhaseOneDev}`}>
            <TimelineMarker
              date='Nov 2019 to May 2019'
              phase='Phase 1 Development'
            />
          </Col>
          <Col
            xs={{ span: 5, offset: 7 }}
            sm={{ span: 4, offset: 7 }}
            md={{ span: 3, offset: 8 }}
            lg={{ span: 3, offset: 7 }}
            className={`${styles.timelineContainer} ${styles.paymentGatewayComplete}`}>
            <TimelineMarker
              date='September 2020'
              phase='XCOYNZ Payment Gateway Complete'
            />
          </Col>
          <img
            src={timeline}
            className={`${styles.paymentTimeline} img-fluid`}
            alt=''
          />
          <Col
            xs={{ span: 5, offset: 5 }}
            sm={{ span: 4, offset: 5 }}
            md={{ span: 3, offset: 5 }}
            lg={{ span: 3, offset: 5 }}
            className={`${styles.timelineContainer} ${styles.paymentPhaseTwoDeployment}`}>
            <TimelineMarker
            date='July 2020'
            phase='Phase 1 Deployment'
            />
          </Col>
        </Col>
      </Row>
    )
  }
}
