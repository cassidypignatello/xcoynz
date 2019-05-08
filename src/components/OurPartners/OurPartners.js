import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './OurPartners.module.css'
import images from '../../assets/images/images.js'

export default class OurPartners extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Row>
          <Col
            xs='auto'
            className='mr-5'>
            <p className={styles.title}>Our <br />Partners</p>
          </Col>
          <Col xl={{ offset: 0 }}>
            <Row>
              <Col xs='auto'>
                <a href='http://www.socialbuzzing.co.uk/' target='_blank'>
                  <img src={images.partners.socialbuzzing} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='https://penseth.co.uk/' target='_blank'>
                  <img src={images.partners.penseth} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='http://boostbery.com/' target='_blank'>
                  <img src={images.partners.boostbery} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs='auto'>
                <a href='https://cryptocopypros.com/' target='_blank'>
                  <img src={images.partners.crypto} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='https://www.theicoshop.io/' target='_blank'>
                  <img src={images.partners.theicoshop} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='http://www.lovelifegeneration.org/' target='_blank'>
                  <img src={images.partners.lovelife} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs='auto'>
                <a href='https://spacestationapes.com/' target='_blank'>
                  <img src={images.partners.spacecard} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='http://www.lifestyle180.co.uk/' target='_blank'>
                  <img src={images.partners.lifestyle180} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='https://coinadmin.com/' target='_blank'>
                  <img src={images.partners.coinadmin} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs='auto'>
                <a href='https://www.strathmorewills.co.uk/' target='_blank'>
                  <img src={images.partners.strathmore} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='https://coincodex.com/' target='_blank'>
                  <img src={images.partners.coincodex} />
                </a>
              </Col>
              <Col xs='auto'>
                <a href='https://www.trackico.io/' target='_blank'>
                  <img src={images.partners.trackico} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
