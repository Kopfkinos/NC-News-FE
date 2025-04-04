import React from "react"
import Card from "react-bootstrap/Card"
import CommentCard from "./CommentCard"
import NewCommentBox from "./NewCommentBox"
import { getArticleComments } from "../../utils/apiFuncs"
import { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner"
import NCSpinner from "./NCSpinner"

export default function ArticleComments({ articleId }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [newCommentTrig, setNewCommentTrig] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getArticleComments(articleId).then((comments) => {
      setComments(comments)
      setIsLoading(false)
    })
  }, [newCommentTrig])

  return (
    <section>
      <NewCommentBox
        className="parent"
        articleId={articleId}
        setComments={setComments}
        comments={comments}
        setNewCommentTrig={setNewCommentTrig}
      ></NewCommentBox>
      {isLoading ? <NCSpinner /> : null}
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            comments={comments}
            setComments={setComments}
          ></CommentCard>
        )
      })}
      {}
    </section>
  )
}
