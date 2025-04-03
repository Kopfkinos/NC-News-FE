import React from "react"
import Card from "react-bootstrap/Card"
import { thumbsUp, thumbsDown, trashIcon } from "../assets/bootStrapIcons"
import VoteTallyBox from "./VoteTallyBox"

export default function CommentCard({ comment }) {
  const formattedTimeCode = new Date(comment.created_at).toUTCString().replace(":00 GMT", "")
  return (
    <article>
      <Card>
        <Card.Header>{comment.author}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{comment.body}</p>
          </blockquote>
          <div>
            <VoteTallyBox updatedVotes={comment.votes} />
            <button id="like-button">{thumbsUp}</button>
            <button id="dislike-button">{thumbsDown}</button>
          </div>
        </Card.Body>
        <Card.Footer className="date">
          {formattedTimeCode}
          <span id="trash-icon">{trashIcon}</span>
        </Card.Footer>
      </Card>
    </article>
  )
}
