import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Member.module.css'

export default class Member extends Component {
  render() {
    const { name, jobTitle, photo } = this.props
    return (
      <Container>
        <Row>
          <Col>
            <img src={photo} alt='' />
          </Col>
          <Col className={styles.icon}></Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.name}>{name}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.jobTitle}>{jobTitle}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
