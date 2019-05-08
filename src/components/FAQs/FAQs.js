import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './FAQs.module.css'

export default class FAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'General',
      isOpen: null
    }
    this.openQuestion = this.openQuestion.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  openQuestion(e) {
    this.state.isOpen == e.target.dataset.index ?
    this.setState({
      isOpen: null
    }) :
    this.setState({
      isOpen: e.target.dataset.index
    })
  }

  handleMenuClick(e) {
    this.setState({
      active: e.target.dataset.name
    })
  }

  render() {
    console.log(this.state.active)
    const { isOpen, active } = this.state
    return (
      <Container
        id='faq'
        className={styles.container}>
        <Row>
          <Col className='mb-5'>
            <p className={styles.title}>FAQS</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.menu}>
            <Row>
              <Col
                lg={{ span: 5, offset: 1}}
                className={active === 'General' ? `${styles.menuButtonActive} ${styles.menuButton} mb-4` : `${styles.menuButton} mb-4`}
                data-name='General'
                onClick={this.handleMenuClick}>
                <p>GENERAL</p>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 5, offset: 1}}
                className={active === 'Business' ? `${styles.menuButtonActive} ${styles.menuButton} mb-4` : `${styles.menuButton} mb-4`}
                data-name='Business'
                onClick={this.handleMenuClick}>
                <p>BUSINESS</p>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 5, offset: 1}}
                className={active === 'Product' ? `${styles.menuButtonActive} ${styles.menuButton} mb-4` : `${styles.menuButton} mb-4`}
                data-name='Product'
                onClick={this.handleMenuClick}>
                <p>PRODUCT</p>
              </Col>
            </Row>
          </Col>
          { active === 'General' ?
            <Col lg={7} className={styles.questions}>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>What is Blockchain and Ethereum?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '1' ? `${styles.open}` : `${styles.close}`}
                      onClick={this.openQuestion}
                      data-index='1'>
                    </Col>
                    { isOpen === '1' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>Blockchain is a distributed system that can maintain a ledger of records or transactions. It uses cryptography to secure and protect information from being tampered with.
      Ethereum is an open-source, public, blockchain-based distributed computing platform featuring smart contracts and it has a higher level of security.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>What is a Smart contract?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '2' ? `${styles.open}` : `${styles.close}`}
                      onClick={this.openQuestion}
                      data-index='2'>
                    </Col>
                    { isOpen === '2' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>What should the GAS attributes be set to when purchasing tokens?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '3' ? `${styles.open}` : `${styles.close}`}
                      onClick={this.openQuestion}
                      data-index='3'>
                    </Col>
                    { isOpen === '3' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>When purchasing our tokens, the recommended mode for the Ethereum network is Gas=50 GW, and Gas Limit=100000.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>Why do I need to use an Exchange for cryptocurrencies?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '4' ? `${styles.open}` : `${styles.close}`}
                      onClick={this.openQuestion}
                      data-index='4'>
                    </Col>
                    { isOpen === '4' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>You can purchase crypto using fiat through an exchange. If you want to ‘exchange’ your crypto with other crypto, then you need to use an exchange. If you want your money back in your bank account, you need an exchange.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>What is the Pre-Sale for?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '1' ? `${styles.open}` : `${styles.close}`}
                      onClick={this.openQuestion}
                      data-index='1'>
                    </Col>
                    { isOpen === '1' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>The Pre-Sale is in place to ensure we have a great start and meet the highest of standards for things such as preliminary marketing and full compliance for all legal matters. In short, for a successful ICO.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
            </Col> :
            null
          }
        </Row>
      </Container>
    )
  }
}
