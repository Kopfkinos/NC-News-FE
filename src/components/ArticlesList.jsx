import React from "react"
import ArticleCard from "./ArticleCard"
import { getArticles } from "../../utils/apiFuncs"
import useApiFunction from "../../utils/useApiRequest"
import { useEffect, useState } from "react"
import NCSpinner from "./NCSpinner"

export default function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getArticles().then(({ data }) => {
      setArticles(data.articles)
      setIsLoading(false)
    })
  }, [])

  // const [data, isLoading, error] = useApiFunction(getArticles)

  if (isLoading) {
    return <NCSpinner />
  } else {
    return (
      <div>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />
        })}
      </div>
    )
  }
}
