import React from "react"
import Spinner from "react-bootstrap/Spinner"
import Modal from "react-bootstrap/Modal"
import { sadFace } from "../assets/bootStrapIcons"

export default function VoteTallyBox({ updatedVotes, isLoading, error }) {
  if (isLoading && !error) {
    return (
      <span className="vote-tally-box">
        <Spinner className="spinner-border-sm" animation="border" variant="danger" />
      </span>
    )
  } else if (error) {
    return (
      <span className="vote-tally-box" id="vote-tally-box-error">
        {sadFace}
      </span>
    )
  } else {
    return <span className="vote-tally-box">{updatedVotes}</span>
  }
}
