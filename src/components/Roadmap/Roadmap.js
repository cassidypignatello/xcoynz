import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Roadmap.module.css'

export default class Roadmap extends Component {
  render() {
    return (
      <Container>
        <Row className={styles.title}></Row>
        <Row></Row>
      </Container>
    )
  }
}
