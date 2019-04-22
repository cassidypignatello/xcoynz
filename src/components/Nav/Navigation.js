import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import brand from '../../assets/images/brand.png'
import caret from '../../assets/images/caret.png'
import styles from './Navigation.module.css'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        className={`${styles.navbar} justify-content-between`}
        variant='light'
        expand='lg'>
        <Navbar.Brand
          className={styles.brand}
          href='#home'>
          <img
            src={brand}
            alt='XCOYNZ'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className={`${styles.nav} ml-auto`}>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#overview'>Overview</Nav.Link>
            <Nav.Link href='#token'>Token</Nav.Link>
            <Nav.Link href='#team'>Team</Nav.Link>
            <Nav.Link href='#roadmap'>Roadmap</Nav.Link>
            <NavDropdown
              title='More'
              id='basic-nav-dropdown'>
              <NavDropdown.Item href='#documents'>Documents</NavDropdown.Item>
              <NavDropdown.Item href='#faq'>FAQ</NavDropdown.Item>
              <NavDropdown.Item href='#blog'>Blog</NavDropdown.Item>
            </NavDropdown>
            <Button
              style={{
                fontWeight: 500,
                width: '122px',
                height: '45px',
                borderRadius: '22.5px',
                boxShadow: '0px 7px 18px 0 rgba(52, 100, 194, 0.16)',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '16px',
                zIndex: 2000
              }}
              href='#'
              variant="light">
              Invest
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
