import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Member.module.css'

export default class Member extends Component {
  render() {
    const { name, title, photo, height, iconMargins, linkedin } = this.props
    return (
      <Container
        className={`${styles.container} mt-5 mb-5`}
        style={{ height: height }}>
        <Row>
          <Col className={styles.photo}>
            <img src={photo} alt='' />
          </Col>
            <Col>
              <a className={`${styles.icon} ${iconMargins}`} href={`https://www.linkedin.com/in/${linkedin}`} target='_blank'></a>
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
