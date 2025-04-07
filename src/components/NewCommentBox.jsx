import React, { useState, useRef, useContext, useEffect } from "react"
import { UserContext } from "./UserContext"
import Card from "react-bootstrap/Card"
import "../NewCommentBox.css"
import CurrentDateTime from "./CurrentDateTime"
import { getUserData, postComment } from "../../utils/apiFuncs"
import Spinner from "react-bootstrap/Spinner"
import NCSpinner from "./NCSpinner"

export default function NewCommentBox({ articleId, setComments, setNewCommentTrig }) {
  const { user, setUser } = useContext(UserContext)
  const [textInput, setTextInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userAvatar, setUserAvatar] = useState(null)

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

  useEffect(() => {
    getUserData(user).then((user) => {
      setUserAvatar(user.avatar_url)
    }),
      []
  })

  return (
    <>
      <article className="parent">
        <Card>
          <Card.Header>{user}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <section className="user">
                {userAvatar ? <img src={userAvatar} /> : <NCSpinner />}

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
