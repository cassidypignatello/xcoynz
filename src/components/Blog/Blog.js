import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Blog.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BlogPostCard from './BlogPostCard.js'
import PrevArrow from './PrevArrow.js'
import NextArrow from './NextArrow.js'
import images from '../../assets/images/images.js'

export default class Blog extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    }
    return (
      <Container
        id='blog'
        fluid={true}>
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
                date='07 May 2019'
                title='The XCOYNZ IEO'
                description='For too long, the world of cryptocurrency has been obtuse and opaque, putting off the public and preventing it from taking part in what promises to be a transformation in the world of money.'
                url='https://medium.com/@xcoynz/the-xcoynz-ieo-c9b6cf48ab0a'
              />
              <BlogPostCard
                image={images.posts.two}
                date='02 May 2019'
                title='Meet the IEO!'
                description='The time of the Initial Exchange Offering (IEO) has come into play in the world of cryptocurrency. There are profound differences between the two, and for both new and more discerning'
                url='https://medium.com/@xcoynz/meet-the-ieo-3d41f88140b7'
              />
              <BlogPostCard
                image={images.posts.three}
                date='22 March 2019'
                title='XCOYNZ Business Update'
                description='Following feedback from market experts, our investors and due to the overall market conditions, after careful consideration by our team, we'
                url='https://medium.com/@xcoynz/xcoynz-business-update-839e478927c2'
              />
              <BlogPostCard
                image={images.posts.four}
                date='28 February 2019'
                title='XCOYNZ Smart Cards'
                description='The characteristics of the Smart Card is the same as a Debit Card, in that it can be used to pay for products and services, as well as withdrawing'
                url='https://medium.com/@xcoynz/xcoynz-smart-cards-fdb9aec5e194'
              />
              <BlogPostCard
                image={images.posts.five}
                date='28 February 2019'
                title='XCOYNZ Payment Gateway'
                description='The XCOYNZ Payment Gateway will be available to all online retailers. The XCOYNZ API link will reside within the retailers’ website (like PayPal) and once the consumer selects it'
                url='https://medium.com/@xcoynz/xcoynz-payment-gateway-55d77e32b13a'
              />
              <BlogPostCard
                image={images.posts.six}
                date='28 February 2019'
                title='XCOYNZ Smart Algorithm Wallet (SAW)'
                description='Individuals will be provided with a free XCOYNZ SAW. This is a unique wallet that integrates all of the Individual’s crypto asset addresses into a'
                url='https://medium.com/@xcoynz/xcoynz-smart-algorithm-wallet-saw-cdffa039eef3'
              />
              <BlogPostCard
                image={images.posts.eight}
                date='28 February 2019'
                title='The XCOYNZ Platform'
                description='The initial ﬁat currency that will be implemented in the XCOYNZ Exchange will be the British Pound Sterling (GBP).'
                url='https://medium.com/@xcoynz/the-xcoynz-platform-32f47d180ad5'
              />
            </Slider>
          </Col>
        </Row>
      </Container>
    )
  }
}
