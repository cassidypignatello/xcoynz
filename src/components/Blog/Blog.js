import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Blog.module.css'

export default class Blog extends Component {
  render() {
    return (
      <Container
        id='blog'
        fluid={true}>
        <Row>
          <Col>
            <p className={`${styles.title} mt-5 mb-5`}>Latest Posts</p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}
