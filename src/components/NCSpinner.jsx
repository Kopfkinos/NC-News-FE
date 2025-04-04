import React from "react"
import Spinner from "react-bootstrap/Spinner"

export default function NCSpinner() {
  return (
    <div className="parent" id="NC-Spinner">
      <Spinner className="spinner" animation="border" variant="danger" />
    </div>
  )
}
