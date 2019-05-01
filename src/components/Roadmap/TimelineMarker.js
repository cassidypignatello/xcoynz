import React, { Fragment, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './TimelineMarker.module.css'

export default class TimelineMarker extends Component {
  render() {
    const { date, phase, description } = this.props
    return (
      <Fragment>
        <Row>
          <Col className={styles.date}>
            <p>{date}</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.phase}>
            <p>{phase}</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.description}>
            <p>{description}</p>
          </Col>
        </Row>
      </Fragment>
    )
  }
}
