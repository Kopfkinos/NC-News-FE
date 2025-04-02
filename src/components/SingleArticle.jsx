import React from "react"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../../utils/apiFuncs"
import ArticleCard from "./ArticleCard"
import ArticleComments from "./ArticleComments"
import { Spinner } from "react-bootstrap"

export default function SingleArticle() {
  const [article, setArticle] = useState(null)
  const { articleId } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getSingleArticle(articleId)
      .then((article) => {
        setArticle(article)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [articleId])

  if (isLoading || !article) {
    return (
      <div className="parent">
        <Spinner className="spinner" animation="border" variant="danger" />
      </div>
    )
  } else {
    return (
      <>
        <ArticleCard article={article} />
        <ArticleComments articleId={articleId} />
      </>
    )
  }
}
