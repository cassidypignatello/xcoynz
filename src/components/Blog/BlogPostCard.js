import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import styles from './Blog.module.css'


export default class BlogPostCard extends Component {
  render() {
    const { image, date, title, description, url } = this.props
    return (
      <Card className={`${styles.card} mr-3`}>
        <Card.Img variant="top" src={image} />
        <Card.Body className={styles.body}>
          <Card.Text className={`${styles.date} d-flex align-items-center`}>
            <span className={styles.calendar}></span>
            {date}
          </Card.Text>
          <Card.Title className={styles.postTitle}>{title}</Card.Title>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <Button
            href={url}
            target='_blank'
            variant='light'
            className={styles.button}>
            Read More
            <span className={`${styles.arrow} mr-5`}></span>
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
