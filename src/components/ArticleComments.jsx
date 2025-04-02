import React from "react"
import Card from "react-bootstrap/Card"
import CommentCard from "./CommentCard"
import { getArticleComments } from "../../utils/apiFuncs"
import { useState, useEffect } from "react"

export default function ArticleComments({ articleId }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getArticleComments(articleId).then((comments) => {
      setComments(comments)
    })
  }, [])

  return (
    <section>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment}></CommentCard>
      })}
    </section>
  )
}
