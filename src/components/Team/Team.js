import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Team.module.css'
import Member from './Member.js'
import images from '../../assets/images/images.js'

export default class Team extends Component {
  render() {
    return (
      <Container
        id='team'
        className={styles.container}>
        <Row>
          <Col>
            <p className={`${styles.title} mt-5 mb-5`}>The Team</p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={4}
            xl={4}>
            <Member
              photo={images.team.aasam}
              name='Aasam Alim'
              title='Founder'
            />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={4}
            xl={4}>
            <Member
              photo={images.team.tushar}
              name='Tushar Gaikwad'
              title='Engineering'
            />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={4}
            xl={4}>
            <Member
              photo={images.team.john}
              name='John Gurudas'
              title='Business Operations'
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={4}
            xl={4}>
            <Member
              photo={images.team.savio}
              name='Savio Henriques'
              title='Technical Operations'
            />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={4}
            xl={4}>
            <Member
              photo={images.team.ritesh}
              name='Ritesh Ranjan'
              title='Product Development'
            />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={6}
            lg={4}
            xl={4}>
            <Member
              photo={images.team.azeem}
              name='Azeem Sultan'
              title='Infrastructure and Architecture'
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
