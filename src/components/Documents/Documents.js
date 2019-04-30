import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Documents.module.css'
import pitchdeck from '../../assets/documents/pitchdeck.pdf'
import onepager from '../../assets/documents/onepager.pdf'
import lightpaper from '../../assets/documents/lightpaper.pdf'
import whitepaper from '../../assets/documents/whitepaper.pdf'
import otherLanguages from '../../assets/documents/other-languages.zip'

export default class Documents extends Component {
  render() {
    return (
      <Container
        id='documents'
        className={`${styles.container} d-flex flex-column align-items-center`}
        fluid={true}>
        <Row
          style={{
            marginTop: '44px',
            justifyContent: 'center'
          }}>
          <Col
            xs={{ span: 'auto', offset: 3 }}
            lg={{ span: 'auto', offset: 0 }}>
            <p className={styles.title}>Documents</p>
          </Col>
        </Row>
        <Row style={{ marginTop: '42px' }}>
          <a href={pitchdeck} download='XCOYNZ Investor Pitch v2.1.pdf'>
            <Col className={styles.pitchdeck}></Col>
          </a>
          <a href={onepager} download='XCOYNZ Onepager V2.pdf'>
            <Col className={styles.onepager}></Col>
          </a>
          <a href={lightpaper} download='XCOYNZ Light Paper V1.5.pdf'>
            <Col className={styles.lightpaper}></Col>
          </a>
          <a href={whitepaper} download='XCOYNZ Full Detailed Whitepaper v2.1.pdf'>
            <Col className={styles.whitepaper}></Col>
          </a>
          <a href={otherLanguages} download='XCOYNZ Full Detailed Whitepaper v2.1_Other_Languages.zip'>
            <Col className={styles.otherLanguages}></Col>
          </a>
        </Row>
      </Container>
    )
  }
}
