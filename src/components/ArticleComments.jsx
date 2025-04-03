import React from "react"
import Card from "react-bootstrap/Card"
import CommentCard from "./CommentCard"
import CommentBox from "./CommentBox"
import { getArticleComments } from "../../utils/apiFuncs"
import { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner"

export default function ArticleComments({ articleId }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [newCommentTrig, setNewCommentTrig] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    getArticleComments(articleId).then((comments) => {
      setComments(comments)
      setIsLoading(false)
    })
  }, [newCommentTrig])

  return (
    <section>
      <CommentBox
        className="parent"
        articleId={articleId}
        setComments={setComments}
        comments={comments}
      ></CommentBox>
      {isLoading ? (
        <div className="parent">
          <Spinner className="spinner" animation="border" variant="danger" />
        </div>
      ) : null}
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setNewCommentTrig={setNewCommentTrig}
            newCommentTrig={newCommentTrig}
          ></CommentCard>
        )
      })}
      {}
    </section>
  )
}
