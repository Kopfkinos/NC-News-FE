import React, { useState, useRef } from "react"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import cn from "classnames"
import "../CommentBox.css"
import CurrentDateTime from "./CurrentDateTime"
import { postComment } from "../../utils/apiFuncs"
import Spinner from "react-bootstrap/Spinner"

export default function CommentBox({
  articleId,
  comments,
  setComments,
  setNewCommentTrig,
  newCommentTrig,
}) {
  const [textInput, setTextInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onChange = (event) => {
    setTextInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setTextInput("")

    postComment(articleId, textInput)
      .then((newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
        setNewCommentTrig(newCommentTrig + 1)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <article className="parent">
        <Card>
          <Card.Header>grumpy19</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <section className="user">
                <img src="https://media1.tenor.com/m/lCKMvnxfzlAAAAAd/knuckles-the-echidna-sonic-frontiers.gif" />
                <form>
                  <textarea onChange={onChange} value={textInput}></textarea>
                </form>
                {isLoading ? (
                  <div className="parent">
                    <Spinner className="spinner" animation="border" variant="danger" />
                  </div>
                ) : (
                  <button
                    onClick={onSubmit}
                    id="submit-button"
                    type="submit"
                    disabled={textInput.length < 1}
                  >
                    Submit
                  </button>
                )}
              </section>
            </blockquote>
            {error ? (
              <p id="err-msg">
                Oh no! There's been an error contacting the server. Try again later!
              </p>
            ) : null}
          </Card.Body>
          <Card.Footer className="date">
            <CurrentDateTime />
          </Card.Footer>
        </Card>
      </article>
    </>
  )
}
