import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Footer.module.css'
import images from '../../assets/images/images.js'

export default class Footer extends Component {
  render() {
    return (
      <Container
        className={styles.container}
        fluid={true}>
        <Row className='justify-content-center'>
          <Col xs={10} className={styles.formContainer}>
            <Col>
              <Row>
                <p className={styles.header}>Get Started Now</p>
              </Row>
              <Row>
                <p className={styles.subheader}>Join Qrypto currencies right now.</p>
              </Row>
            </Col>
            <Col>
              <Row></Row>
            </Col>
          </Col>
        </Row>
        <Row className={styles.info}>
          <Col
            xs={12}
            lg={{ span: 4, offset: 1 }}>
            <Row className='justify-content-center justify-content-lg-start'>
              <img src={images.icons.footerLogo} />
            </Row>
            <Row className='justify-content-center justify-content-lg-start'>
              <p className={styles.copyright}>Copyright © 2019, XCOYNZ.</p>
            </Row>
          </Col>
          <Col
            xs={12}
            lg={{ span: 4, offset: 2 }}
            className='mr-5'>
            <Row className='justify-content-center justify-content-lg-end'>
              <p className={`${styles.contact} text-center text-lg-right`}>XCOYNZ Ltd, 63-66 Hatton Garden, Fifth Floor Suite 23, London, EC1N 8LE <br />All trademarks and copyrights belong to their respective owners.</p>
            </Row>
            <Row className='align-items-center justify-content-center justify-content-lg-end'>
              <a href='https://www.instagram.com/xcoynz/' target='_blank'>
                <img src={images.icons.instagram} style={{ marginRight: '10px' }} />
              </a>
              <a href='https://www.linkedin.com/company/xcoynz/' target='_blank'>
                <img src={images.icons.linkedin} style={{ marginRight: '10px' }}/>
              </a>
              <a href='https://www.facebook.com/XCOYNZ/' target='_blank'>
                <img src={images.icons.facebook} style={{ marginRight: '10px' }}/>
              </a>
              <a href='https://twitter.com/xcoynz' target='_blank'>
                <img src={images.icons.twitter} style={{ marginRight: '10px' }}/>
              </a>
              <a href='https://github.com/xcoynz' target='_blank'>
                <img src={images.icons.github} style={{ marginRight: '10px' }}/>
              </a>
              <a href='https://t.me/XCOYNZ' target='_blank'>
                <img src={images.icons.telegram} style={{ marginRight: '10px' }}/>
              </a>
              <a href='https://medium.com/@xcoynz' target='_blank'>
                <img src={images.icons.medium} style={{ marginRight: '10px' }}/>
              </a>
            </Row>
            <Row className='justify-content-center justify-content-lg-end'>
              <p className={`${styles.privacy} text-center text-lg-right`}>Privacy Policy</p>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
