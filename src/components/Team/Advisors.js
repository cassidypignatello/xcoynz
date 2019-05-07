import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Team.module.css'
import Member from './Member.js'
import images from '../../assets/images/images.js'

export default class Advisors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iconMargins: 'ml-0 ml-sm-4 ml-md-4 ml-lg-5 ml-xl-0'
    }
  }
  render() {
    const { iconMargins } = this.state
    return (
      <Container className={styles.container}>
        <Row>
          <Col>
            <p className={`${styles.title} mt-5 mb-5`}>The Advisors</p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.wyatt}
              name='Wyatt Meldrumm'
              title='Senior Marketing Advisor'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.richard}
              name='Richard Stebbings'
              title='Blockchain Development'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.andrijano}
              name='Andrijano Vujasin'
              title='Blockchain Expert and Experienced Cryptotrader'
              iconMargins={iconMargins}
              // height='69%'
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.joshua}
              name='Joshua Clow'
              title='Marketing Advisor'
              iconMargins={iconMargins}
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.maya}
              name='Maya Johnny'
              title='Social Media Strategist'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.timothy}
              name='Timothy Kingery'
              title='Marketing Advisor'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.maria}
              name='Maria St. Berova'
              title='Communications'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.edem}
              name='Edem Vormawah'
              title='Web Development'
              iconMargins={iconMargins}
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.stephen}
              name='Stephen Ihme'
              title='The Penseth Company, Founder'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.harendra}
              name='Harendra Patel'
              title='Key Investor Influencer'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.david}
              name='David Bigglestone'
              title='Community Ambassador'
              iconMargins={iconMargins}
            />
          </Col>
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={5}
            xl={3}>
            <Member
              photo={images.advisors.mohammud}
              name='Mohammud Jaufarally'
              title='Accounting'
              iconMargins={iconMargins}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
