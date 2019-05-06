import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Team.module.css'
import Member from './Member.js'
import images from '../../assets/images/images.js'

export default class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iconMargins: 'ml-3 ml-sm-4 ml-md-4 ml-lg-3 ml-xl-5'
    }
  }
  render() {
    const { iconMargins } = this.state
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
              iconMargins={iconMargins}
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
              iconMargins={iconMargins}
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
              iconMargins={iconMargins}
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
              iconMargins={iconMargins}
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
              iconMargins={iconMargins}
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
              iconMargins={iconMargins}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
