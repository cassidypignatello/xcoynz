import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Member.module.css'

export default class Member extends Component {
  render() {
    const { name, title, photo } = this.props
    return (
      <Container className={`${styles.container} mt-5 mb-5`}>
        <Row>
          <Col className={styles.photo}>
            <img src={photo} alt='' />
          </Col>
          <Col
            className={`${styles.icon} ml-4 ml-sm-4 ml-md-4 ml-lg-3 ml-xl-5`}>
          </Col>
        </Row>
        <Row>
          <Col xs='auto'>
            <p className={styles.name}>{name}</p>
          </Col>
        </Row>
        <Row>
          <Col xs='auto'>
            <p className={styles.title}>{title}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
