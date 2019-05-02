import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './Timeline.module.css'
import timeline from '../../assets/images/saw-timeline.png'
import TimelineMarker from './TimelineMarker.js'

export default class SAWTimeline extends Component {
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
            className={`${styles.timelineContainer} ${styles.SAWPhaseOne}`}>
            <TimelineMarker
              date='Apr 2019 to Sep 2019'
              phase='Phase 1 Development'
              description='Offset network fee. Most profitable use of assets.'
            />
          </Col>
          <Col
            xs={{ span: 5, offset: 6 }}
            sm={{ span: 5, offset: 5 }}
            md={{ span: 4, offset: 5 }}
            lg={{ span: 3, offset: 5 }}
            className={`${styles.timelineContainer} ${styles.SAWPhaseTwoDev}`}>
            <TimelineMarker
              date='Nov 2019 to May 2020'
              phase='Phase 2 Development'
              description='HODL predictions.'
            />
          </Col>
          <Col
            xs={{ span: 3, offset: 8 }}
            sm={{ span: 3, offset: 7 }}
            md={{ span: 3, offset: 8 }}
            lg={{ span: 3, offset: 7 }}
            className={`${styles.timelineContainer} ${styles.SAWPhaseTwoDeployment}`}>
            <TimelineMarker
              date='July 2020'
              phase='Phase 2 Deployment'
            />
          </Col>
          <img src={timeline} className={`${styles.SAWTimeline} img-fluid`} />
          <Col
            xs={{ span: 4, offset: 2 }}
            sm={{ span: 4, offset: 2 }}
            md={{ span: 3, offset: 2 }}
            lg={{ span: 2, offset: 2 }}
            className={`${styles.timelineContainer} ${styles.SAWPhaseOneDeployment}`}>
            <TimelineMarker
              date='Nov 2019'
              phase='Phase 1 Deployment'
            />
          </Col>
          <Col
            xs={{ span: 5, offset: 8 }}
            sm={{ span: 4, offset: 8 }}
            md={{ span: 3, offset: 8 }}
            lg={{ span: 3, offset: 8 }}
            className={`${styles.timelineContainer} ${styles.SAWComplete}`}>
            <TimelineMarker
              date='August 2020'
              phase='XCOYNZ Smart Algorithm Wallet Complete'
            />
          </Col>
        </Col>
      </Row>
    )
  }
}
