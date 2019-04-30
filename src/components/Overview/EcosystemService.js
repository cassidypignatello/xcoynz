import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './EcosystemService.module.css'
import checkmark from '../../assets/images/orange-check.png'

export default class EcosystemService extends Component {
  render() {
    const {
      containerStyle,
      icon,
      title,
      subtitleWidth,
      subtitleHeight,
      subtitle,
      content1,
      content2,
      content3,
      content4,
      content4Width,
      content5,
      content5Width
    } = this.props
    return (
      <Col
        xs='auto'
        className={containerStyle}>
        <img
          src={icon}
          style={{
            position: 'relative',
            left: '-117px'
          }}
        />
        <Row style={{ marginTop: '-115px' }}>
          <Col lg='auto' className={styles.title}>
            <p>{title}</p>
          </Col>
        </Row>
        <Row>
          <Col
            lg='auto'
            className={styles.subtitle}
            style={{
              width: subtitleWidth,
              height: subtitleHeight
            }}>
            <p>{subtitle}</p>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }}>
          <Col lg='auto'>
            <img src={checkmark} />
          </Col>
          <Col className={styles.content}>
            <p>{content1}</p>
          </Col>
        </Row>
        <Row>
          <Col lg='auto'>
            <img src={checkmark} />
          </Col>
          <Col className={styles.content}>
            <p>{content2}</p>
          </Col>
        </Row>
        <Row>
          <Col lg='auto'>
            <img src={checkmark} />
          </Col>
          <Col className={styles.content}>
            <p>{content3}</p>
          </Col>
        </Row>
        <Row
          className={styles.useCases}
          style={{ marginTop: '19px' }}>
          <Col>
            <p>Use Cases:</p>
          </Col>
        </Row>
        <Row>
          <Col lg='auto'>
            <img src={checkmark} />
          </Col>
          <Col className={styles.content}>
            <p style={{ width: content4Width }}>
              {content4}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='auto'>
            <img src={checkmark} />
          </Col>
          <Col className={styles.content}>
            <p style={{ width: content5Width }}>
              {content5}
            </p>
          </Col>
        </Row>
      </Col>
    )
  }
}
