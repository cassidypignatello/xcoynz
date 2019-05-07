import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Blog.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BlogPostCard from './BlogPostCard.js'
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
              <BlogPostCard
                image={images.posts.one}
                date='June 21, 2018'
                title='XCOYNZ Business Update'
                description='Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we'
              />
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
