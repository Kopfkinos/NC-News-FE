import React from "react"
import ArticleCard from "./ArticleCard"
import { getArticles } from "../../utils/apiFuncs"
import useApiFunction from "../../utils/useApiRequest"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import NCSpinner from "./NCSpinner"
import SortDropDown from "./SortDropDown"

export default function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get("topic")
  const sortBy = searchParams.get("sort_by")

  useEffect(() => {
    setIsLoading(true)
    getArticles(sortBy, topic).then(({ data }) => {
      setArticles(data.articles)
      setIsLoading(false)
    })
  }, [])

  // const [data, isLoading, error] = useApiFunction(getArticles)

  if (isLoading) {
    return <NCSpinner />
  } else {
    return (
      <>
        <nav className="parent">
          <SortDropDown setArticles={setArticles} />
        </nav>
        <div className="parent">
          <h2>{topic ? `here's what our users are saying about: ${topic}...` : null} </h2>
        </div>
        <section>
          {articles.map((article) => {
            return (
              <article className="article-card">
                <ArticleCard key={article.article_id} article={article} />
              </article>
            )
          })}
        </section>
      </>
    )
  }
}
