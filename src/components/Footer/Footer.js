import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styles from './Footer.module.css'
import images from '../../assets/images/images.js'

export default class Footer extends Component {
  render() {
    return (
      <Container
        className={styles.container}
        fluid={true}>
        <Row className='justify-content-center'>
          <Col
            xs={10}
            className={`${styles.formContainer} d-flex flex-column flex-lg-row`}>
            <Col xs={12} lg={6}>
              <Row className='justify-content-center justify-content-lg-start'>
                <p className={styles.header}>Want to learn more?</p>
              </Row>
              <Row className='justify-content-center justify-content-lg-start'>
                <p className={styles.subheader}>Leave your email and our team will contact you.</p>
              </Row>
            </Col>
            <Col xs={12} lg={6} className='ml-4 d-flex align-items-start align-items-lg-center justify-content-center'>
              <Form
                action='https://globalblockchainnetwork.us20.list-manage.com/subscribe/post?u=b0503c9b313182c9004f0b089&amp;id=39b340a3cf'
                method='post'
                target='_blank'
                className='d-flex align-items-center'>
                <Form.Group style={{ marginBottom: 0 }} controlId="formBasicEmail">
                  <Col>
                    <Form.Control className={styles.formInput} type="email" placeholder="Enter your email address" />
                  </Col>
                </Form.Group>
                <Button className={styles.formButton} variant="light" type="submit">
                  Sign Up
                </Button>
              </Form>
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
