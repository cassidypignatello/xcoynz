import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styles from './Blog.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import images from '../../assets/images/images.js'

export default class Blog extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return (
      <Container
        id='blog'>
        <Row>
          <Col>
            <p className={`${styles.title} mt-5 mb-5`}>Latest Posts</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider {...settings}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={images.posts.one} />
                <Card.Body className={styles.body}>
                  <Card.Text className={`${styles.date} d-flex align-items-center`}>
                    <span className={styles.calendar}></span>
                    June 21, 2018
                  </Card.Text>
                  <Card.Title className={styles.postTitle}>XCOYNZ Business Update</Card.Title>
                  <Card.Text className={styles.description}>
                    Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we
                  </Card.Text>
                  <Button
                    variant='light'
                    className={styles.button}>
                    Read More
                    <span className={`${styles.arrow} mr-5`}></span>
                  </Button>
                </Card.Body>
              </Card>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    )
  }
}
