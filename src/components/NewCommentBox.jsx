import React, { useState, useRef, useContext } from "react"
import { UserContext } from "./UserContext"
import Card from "react-bootstrap/Card"
import "../NewCommentBox.css"
import CurrentDateTime from "./CurrentDateTime"
import { postComment } from "../../utils/apiFuncs"
import Spinner from "react-bootstrap/Spinner"

export default function NewCommentBox({ articleId, setComments, setNewCommentTrig }) {
  const { user, setUser } = useContext(UserContext)
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

    postComment(articleId, user, textInput)
      .then((newComment) => {
        setComments((currComments) => {
          return [...currComments, newComment]
        })
        setNewCommentTrig([])
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <article className="parent">
        <Card>
          <Card.Header>{user}</Card.Header>
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
                Oh no! There's been an error contacting the server. Try refreshing the page!
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
