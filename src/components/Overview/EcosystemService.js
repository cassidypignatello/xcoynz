import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './EcosystemService.module.css'
import checkmark from '../../assets/images/orange-check.png'

export default class EcosystemService extends Component {
  render() {
    const {
      containerStyle,
      icon,
      iconLeft,
      title,
      subtitleWidth,
      subtitle,
      content1,
      content1Width,
      content2,
      content2Width,
      content3,
      content3Display,
      content4,
      content4Width,
      content5,
      content5Width,
      content5Display,
      useCaseMarginTop
    } = this.props
    return (
      <Col
        xs='auto'
        className={containerStyle}>
        <img
          src={icon}
          style={{
            position: 'relative',
            left: iconLeft
          }}
          alt=''
        />
        <Row style={{ marginTop: '-115px' }}>
          <Col lg='auto'>
            <p className={styles.title}>{title}</p>
          </Col>
        </Row>
        <Row>
          <Col
            lg='auto'
            className={styles.subtitle}
            style={{ width: subtitleWidth }}>
            <p>{subtitle}</p>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }}>
          <Col
            xs='auto'
            lg='auto'>
            <img src={checkmark} alt='' />
          </Col>
          <Col
            xs='auto'
            className={styles.content}>
            <p style={{ width: content1Width }}>{content1}</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs='auto'
            lg='auto'>
            <img src={checkmark} alt='' />
          </Col>
          <Col
            xs='auto'
            className={styles.content}>
            <p style={{ width: content2Width }}>{content2}</p>
          </Col>
        </Row>
        <Row style={{ display: content3Display }}>
          <Col
            xs='auto'
            lg='auto'>
            <img src={checkmark} alt='' />
          </Col>
          <Col
            xs='auto'
            className={styles.content}>
            <p>{content3}</p>
          </Col>
        </Row>
        <Row
          className={styles.useCases}
          style={{ marginTop: useCaseMarginTop }}>
          <Col>
            <p>Use Cases:</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs='auto'
            lg='auto'>
            <img src={checkmark} alt='' />
          </Col>
          <Col
            xs='auto'
            className={styles.content}>
            <p style={{ width: content4Width }}>
              {content4}
            </p>
          </Col>
        </Row>
        <Row style={{ display: content5Display }}>
          <Col
            xs='auto'
            lg='auto'>
            <img src={checkmark} alt='' />
          </Col>
          <Col
            xs='auto'
            className={styles.content}>
            <p style={{ width: content5Width }}>
              {content5}
            </p>
          </Col>
        </Row>
      </Col>
    )
  }
}

EcosystemService.defaultProps = {
  iconLeft: '-117px'
}
