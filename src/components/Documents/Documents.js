import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Documents.module.css'
import documents from '../../assets/images/documents-header.png'

export default class Documents extends Component {
  render() {
    return (
      <Container
        className={`${styles.container} d-flex justify-content-center align-items-center`}
        fluid={true}>
        <Row>
          <Col
            xs={{ span: 'auto', offset: 3 }}
            lg='auto'>
            <img src={documents} alt='Documents' />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}
