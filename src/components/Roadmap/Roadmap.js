import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Roadmap.module.css'

export default class Roadmap extends Component {
  render() {
    return (
      <Container
        className={styles.roadmap} 
        id='roadmap'>
        <Row className='justify-content-center'>
          <p className={styles.title}>Our Roadmap</p>
        </Row>
        <Row></Row>
      </Container>
    )
  }
}
