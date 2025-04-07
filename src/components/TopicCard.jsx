import React from "react"
import Card from "react-bootstrap/Card"

export default function TopicCard({ topic }) {
  return (
    <article>
      <a href={`/articles?topic=${topic.slug}`}>
        <Card className="bg-dark text-white">
          <Card.Img
            className="topic-card-image"
            src={topic.img_url}
            alt={`${topic.slug} topic card image`}
          />
          <Card.ImgOverlay>
            <Card.Title>{topic.slug}</Card.Title>
            <Card.Text>{topic.description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </a>
    </article>
  )
}
