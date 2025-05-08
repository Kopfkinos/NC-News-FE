import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import TopicCard from "./TopicCard"
import { getTopics } from "../../utils/apiFuncs"
import NCSpinner from "./NCSpinner"

export default function Topics() {
  const [topicsList, setTopicsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getTopics().then((topics) => {
      setTopicsList(topics)
      setIsLoading(false)
    })
  }, [])

  return (
    <section className="topic-cards">
      {isLoading ? (
        <NCSpinner />
      ) : (
        topicsList.map((topic) => {
          return <TopicCard topic={topic} />
        })
      )}
    </section>
  )
}
