import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import { commentIcon, thumbsDown, thumbsUp } from "../assets/bootStrapIcons"
import VoteButtons from "./VoteButtons"

export default function ArticleCard({ article }) {
  const [error, setError] = useState(null)

  const formattedTimeCode = new Date(article.created_at).toUTCString().replace(":00 GMT", "")
  return (
    <article className="parent">
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Header className="text-danger">
            nc/<a href={`?topic=${article.topic}`}>{article.topic}</a>
          </Card.Header>
          <a href={`/articles/${article.article_id}`}>
            <Card.Title>{article.title}</Card.Title>
          </a>
          <Card.Text className="text-secondary">by {article.author}</Card.Text>
          <Card.Text>{article.body}</Card.Text>
          <VoteButtons article={article} error={error} setError={setError} />
          <a href={`/articles/${article.article_id}`}>
            <button id="comments-button">
              {commentIcon}
              <span> {article.comment_count}</span>
            </button>
          </a>
          {error ? <p className="err-msg">Error ahoy! Try refreshing the page!</p> : null}
        </Card.Body>
        <Card.Footer className="date">{formattedTimeCode}</Card.Footer>
      </Card>
    </article>
  )
}
