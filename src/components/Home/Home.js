import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Home.module.css'
import ModalVideo from 'react-modal-video'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <Container
        id='home'
        className={`${styles.container}`}>
        <Row>
          <Col
            lg={{ span: 'auto', offset: 1 }}
            className={`${styles.header}`}>
            <p className='text-center text-lg-left'>A Cryptocurrency <br />Platform</p>
          </Col>
        </Row>
        <Row className={`${styles.subheaderRow} justify-content-lg-start justify-content-md-center`}>
          <Col
            lg={{ span: 'auto', offset: 1 }}
            className={styles.subheader}>
            <p className='text-center text-lg-left'>Including an Exchange that allows you to Set Your Own Fee… <br />BUT that's not all……</p>
          </Col>
          <Col
            className={styles.videoModal}
            lg={{ span: 'auto' }}>
            <ModalVideo
              channel='youtube'
              isOpen={this.state.isOpen}
              videoId='2FyG95dmJkw'
              onClose={() => this.setState({isOpen: false})}
            />
          </Col>
        </Row>
        <Row className={`${styles.buttonRow} justify-content-xs-center justify-content-lg-flex-start`}>
          <Col
            xs={{ span: 'auto', offset: 2 }}
            md={{ span: 'auto', offset: 1 }}
            lg={{ span: 'auto', offset: 1 }}>
            <Button
              className={styles.button}
              href='#'>
              <p className={styles.buttonText}>New to Crypto Investment</p>
            </Button>
          </Col>
          <Col
            xs={{ span: 'auto', offset: 3 }}
            md={{ span: 'auto', offset: 0 }}
            lg={{ span: 'auto', offset: 0 }}>
            <div
              className={styles.videoButton}
              onClick={this.openModal}>
            </div>
          </Col>
          <Col xs='auto'>
            <div
              className={styles.videoButtonText}
              onClick={this.openModal}>
              Watch Our Video
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
