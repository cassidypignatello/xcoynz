import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Team.module.css'
import Member from './Member.js'

export default class Team extends Component {
  render() {
    return (
      <Container id='team'>
        <Row>
          <Col>
            <p className={`${styles.title}`}>The Team</p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
        </Row>
      </Container>
    )
  }
}
