import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Documents.module.css'
import documents from '../../assets/images/documents-header.png'

export default class Documents extends Component {
  render() {
    return (
      <Container
        id='documents'
        className={`${styles.container} d-flex flex-column align-items-center`}
        fluid={true}>
        <Row
          className={styles.title}
          style={{
            marginTop: '44px',
            justifyContent: 'center'
          }}>
          <Col
            xs={{ span: 'auto', offset: 3 }}
            lg={{ span: 'auto', offset: 0 }}>
            <img src={documents} alt='Documents' />
          </Col>
        </Row>
        <Row style={{ marginTop: '42px' }}>
          <Col className={styles.pitchdeck}></Col>
          <Col className={styles.onepager}></Col>
          <Col className={styles.lightpaper}></Col>
          <Col className={styles.whitepaper}></Col>
          <Col className={styles.otherLanguages}></Col>
        </Row>
      </Container>
    )
  }
}
