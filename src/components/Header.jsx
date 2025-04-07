import React from "react"

export default function Header() {
  return (
    <header>
      <a href="/">
        <h2>
          Northcoders News<span id="NC-Logo"> ^</span>
        </h2>
      </a>
      <p>
        <a href="/">Home </a> - <a href="/topics">Topics</a>
      </p>
    </header>
  )
}
