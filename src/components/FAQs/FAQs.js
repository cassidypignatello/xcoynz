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
    console.log(e.target.dataset.name)
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
                className={active === 'General' ? `${styles.menuButtonActive} ${styles.menuButton} mb-4` : `${styles.menuButton} mb-4`}>
                <p data-name='General' onClick={this.handleMenuClick}>GENERAL</p>
              </Col>
            </Row>
            <Row >
              <Col
                lg={{ span: 5, offset: 1}}
                className={active === 'Business' ? `${styles.menuButtonActive} ${styles.menuButton} mb-4` : `${styles.menuButton} mb-4`}>
                <p data-name='Business' onClick={this.handleMenuClick}>BUSINESS</p>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 5, offset: 1}}
                className={active === 'Product' ? `${styles.menuButtonActive} ${styles.menuButton} mb-4` : `${styles.menuButton} mb-4`}>
                <p data-name='Product' onClick={this.handleMenuClick}>PRODUCT</p>
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
                      className={isOpen === '1' ? `${styles.close}` : `${styles.open}`}
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
                      className={isOpen === '2' ? `${styles.close}` : `${styles.open}`}
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
                      className={isOpen === '3' ? `${styles.close}` : `${styles.open}`}
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
                      className={isOpen === '4' ? `${styles.close}` : `${styles.open}`}
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
                      className={isOpen === '5' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='5'>
                    </Col>
                    { isOpen === '5' ?
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
            </Col> : null
          }
          { active === 'Business' ?
            <Col lg={7} className={styles.questions}>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>Where are you based?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '7' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='7'>
                    </Col>
                    { isOpen === '7' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>XCOYNZ Limited is a UK registered company, based in London.</p>
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
                      <p className={styles.question}>What is XCOYNZ, and what is the project about?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '8' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='8'>
                    </Col>
                    { isOpen === '8' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>XCOYNZ is a platform that consists of 4 major components:<br />1. XCOYNZ Exchange<br />2. XCOYNZ Smart Algorithm Wallet<br />3. XCOYNZ Payment Gateway<br />4. XCOYNZ Smart Card</p>
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
                      <p className={styles.question}>Does XCOYNZ have the skills and the capacity to realise the idea of the platform?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '9' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='9'>
                    </Col>
                    { isOpen === '9' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>We have the diversity in the Team as well as the business experience and drive to develop our vision from conception to launch.</p>
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
                      <p className={styles.question}>How secure is your Platform?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '10' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='10'>
                    </Col>
                    { isOpen === '10' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>Our Platform will be secured through multiple security features and systems specially tailored to prevent the risk of both internal and cyber-attacks. For security reasons, it is not detailed further at this stage.</p>
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
                      <p className={styles.question}>Why is XCZ a token and not a coin?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '11' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='11'>
                    </Col>
                    { isOpen === '11' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>A coin is a standalone cryptocurrency based on its own Blockchain and is only used as a means of payment. A token is developed and hosted on existing Blockchains and also has additional functionality. As XCZ has multiple uses on our Platform and has been developed on the Ethereum platform, it is therefore a token.</p>
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
                      <p className={styles.question}>Will ‘Know Your Customer’ and ‘Anti-Money Laundering’ requirements apply, or will it be anonymous?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '12' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='12'>
                    </Col>
                    { isOpen === '12' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>Know Your Customer and Anti-Money Laundering (KYC/AML) requirements will be fully applicable for every investor.</p>
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
                      <p className={styles.question}>What is XCOYNZ’s long term goal?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '13' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='13'>
                    </Col>
                    { isOpen === '13' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>To be the platform of choice for everyone. Whether experienced in the cryptocurrency world or a newcomer, to enter this space and reap the benefits of repeat transactions with confidence, ease and with time and cost efficiencies.</p>
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
                      <p className={styles.question}>Which countries are restricted to invest in XCOYNZ?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '14' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='14'>
                    </Col>
                    { isOpen === '14' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>We are serving the global market and have not set any restrictions. However, we have no control over regional regulations and restrictions.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
            </Col> : null
          }
          { active === 'Product' ?
            <Col lg={7} className={styles.questions}>
              <Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>Why is XCOYNZ being developed using blockchain technology?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '15' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='15'>
                    </Col>
                    { isOpen === '15' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>The XCOYNZ Platform is being developed using blockchain in order to avail and unlock discounts and bonuses when using the XCZ token on the XCOYNZ platform.</p>
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
                      <p className={styles.question}>Why is the XCOYNZ Exchange better than other exchanges?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '16' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='16'>
                    </Col>
                    { isOpen === '16' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>It is more than an exchange, it is a Platform with the benefit of innovative and unique features such as the XCOYNZ SAW, Payment Gateway and Smart Card. The XCOYNZ Exchange allows an Individual to exchange crypto to fiat, fiat to crypto and crypto to crypto with simplicity and almost no fees.</p>
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
                      <p className={styles.question}>Can someone in any country send money to any other country via your exchange?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '17' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='17'>
                    </Col>
                    { isOpen === '17' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>In the initial phase fiat currency transactions will be enabled in UK and other EU countries. XCOYNZ mission is to be a global exchange allowing transfers across all countries subject to local regulations. There are no geographical restrictions in exchanging crypto-currencies.</p>
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
                      <p className={styles.question}>How safe is the XCOYNZ Smart Algorithm Wallet?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '18' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='18'>
                    </Col>
                    { isOpen === '18' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>Our Platform will have multiple layers of security, one of which will be two-factor authentication for Individual Smart Algorithm Wallets.</p>
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
                      <p className={styles.question}>Why is the XCOYNZ Smart Algorithm Wallet better than other wallets?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '19' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='19'>
                    </Col>
                    { isOpen === '19' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>The unique nature of the Smart Algorithm Wallet is such that it uses algorithms to provide strategic guidance where other wallets simply hold a single crypto asset. It combines multiple assets into a single entity but also has the ability to make recommendations on which of the components should be sold immediately or used to offset network fees and which should be held for long-term benefits (HODL). No other wallets provide intelligence in this way for maximising your profits and minimising network fees.</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>
              {/*<Row>
                <Col>
                  <Row className={`${styles.questionBox} mb-4`}>
                    <Col xs={10}>
                      <p className={styles.question}>Can I connect my PayPal and/or other banks to the XCOYNZ Exchange?</p>
                    </Col>
                    <Col
                      xs={1}
                      className={isOpen === '20' ? `${styles.close}` : `${styles.open}`}
                      onClick={this.openQuestion}
                      data-index='20'>
                    </Col>
                    { isOpen === '20' ?
                      <Row>
                        <Col lg={10}>
                          <p className={styles.answer}>Can I connect my PayPal and/or other banks to the XCOYNZ Exchange?</p>
                        </Col>
                      </Row> :
                      null
                    }
                  </Row>
                </Col>
              </Row>*/}
            </Col> : null
          }
        </Row>
      </Container>
    )
  }
}
