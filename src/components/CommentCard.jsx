import React, { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import Card from "react-bootstrap/Card"
import { thumbsUp, thumbsDown, trashIcon } from "../assets/bootStrapIcons"
import VoteTallyBox from "./VoteTallyBox"
import { deleteComment } from "../../utils/apiFuncs"
import VoteButtons from "./VoteButtons"
import NCSpinner from "./NCSpinner"

export default function CommentCard({ comment, comments, setComments }) {
  const formattedTimeCode = new Date(comment.created_at).toUTCString().replace(":00 GMT", "")
  const { user, setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrashClick = (event) => {
    setIsLoading(true)
    deleteComment(comment.comment_id).then(() => {
      setComments(
        comments.filter((currComment) => {
          return currComment.comment_id !== comment.comment_id
        })
      )
      setIsLoading(false)
    })
  }

  return (
    <article>
      <Card>
        <Card.Header>{comment.author}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{comment.body}</p>
          </blockquote>
          <div>
            <VoteButtons comment={comment} />
          </div>
        </Card.Body>
        <Card.Footer className="date">
          <span id="comment-date">
            {formattedTimeCode}
            {user === comment.author ? (
              <button onClick={handleTrashClick} id="trash-button">
                {isLoading ? <NCSpinner id="trash-button" /> : trashIcon}
              </button>
            ) : null}
          </span>
        </Card.Footer>
      </Card>
    </article>
  )
}
