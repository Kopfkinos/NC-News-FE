import React, { use, useState } from "react"
import { thumbsUp } from "../assets/bootStrapIcons"
import { thumbsDown } from "../assets/bootStrapIcons"
import { updateArticleVotes } from "../../utils/apiFuncs"
import Spinner from "react-bootstrap/Spinner"
import VoteTallyBox from "./VoteTallyBox"

export default function ({ article, error, setError }) {
  const [updatedVotes, setupdatedVotes] = useState(article.votes)
  const [isLoading, setIsLoading] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  function handleLikeClick(vote) {
    setIsLoading(true)
    setIsButtonDisabled(true)
    updateArticleVotes(article.article_id, vote)
      .then((votes) => {
        setupdatedVotes(votes)
        setIsLoading(false)
        setIsButtonDisabled(false)
      })
      .catch((err) => {
        setIsButtonDisabled(true)
        setError(err)
      })
  }

  return (
    <>
      <VoteTallyBox updatedVotes={updatedVotes} error={error} isLoading={isLoading} />
      <button id="like-button" onClick={() => handleLikeClick(1)} disabled={isButtonDisabled}>
        {thumbsUp}
      </button>
      <button id="dislike-button" onClick={() => handleLikeClick(-1)} disabled={isButtonDisabled}>
        {thumbsDown}
      </button>
    </>
  )
}
