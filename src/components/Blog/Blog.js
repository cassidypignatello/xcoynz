import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Blog.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BlogPostCard from './BlogPostCard.js'
import NextArrow from './NextArrow.js'
import images from '../../assets/images/images.js'

export default class Blog extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
    }
    return (
      <Container
        id='blog'
        fluid={true}
        style={{ overflow: 'hidden' }}>
        <Row>
          <Col>
            <p className={`${styles.title} mt-5 mb-5`}>Latest Posts</p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2 }}>
            <Slider {...settings}>
              <BlogPostCard
                image={images.posts.one}
                date='June 21, 2018'
                title='XCOYNZ Business Update'
                description='Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we'
              />
              <BlogPostCard
                image={images.posts.two}
                date='June 21, 2018'
                title='XCOYNZ Business Update'
                description='Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we'
              />
              <BlogPostCard
                image={images.posts.three}
                date='June 21, 2018'
                title='XCOYNZ Business Update'
                description='Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we'
              />
              <BlogPostCard
                image={images.posts.four}
                date='June 21, 2018'
                title='XCOYNZ Business Update'
                description='Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we'
              />
            </Slider>
          </Col>
        </Row>
      </Container>
    )
  }
}
