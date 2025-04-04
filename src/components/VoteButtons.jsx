import React, { use, useState } from "react"
import { thumbsUp } from "../assets/bootStrapIcons"
import { thumbsDown } from "../assets/bootStrapIcons"
import { updateArticleVotes, updateCommentVotes } from "../../utils/apiFuncs"
import VoteTallyBox from "./VoteTallyBox"

export default function ({ article, comment, error, setError }) {
  const [updatedVotes, setUpdatedVotes] = useState(article ? article.votes : comment.votes)

  const [isLoading, setIsLoading] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  function handleLikeClick(newVote) {
    setIsLoading(true)
    setIsButtonDisabled(true)
    if (article) {
      updateArticleVotes(article.article_id, newVote)
        .then((votes) => {
          setUpdatedVotes(votes)
          setIsLoading(false)
          setIsButtonDisabled(false)
        })
        .catch((err) => {
          setIsButtonDisabled(true)
          setError(err)
        })
    }
    if (comment) {
      updateCommentVotes(comment.comment_id, newVote).then((votes) => {
        setUpdatedVotes(votes)
        setIsLoading(false)
        setIsButtonDisabled(false)
      })
    }
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
