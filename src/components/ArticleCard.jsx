import React from "react"
import Card from "react-bootstrap/Card"

export default function ArticleCard({ article }) {
  const formattedTimeCode = new Date(article.created_at).toUTCString().replace(":00 GMT", "")

  return (
    <div className="parent">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Header>nc/{article.topic}</Card.Header>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.body}</Card.Text>
          <button>Like</button> <button>Comments</button>
        </Card.Body>
        <Card.Footer>{formattedTimeCode}</Card.Footer>
      </Card>
    </div>
  )
}
