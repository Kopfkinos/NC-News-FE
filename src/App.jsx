import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"

function App() {
  return (
    <>
      <div>
        <header className="parent">
          <Header />
        </header>
        <main>
          <ArticlesList />
        </main>
        <nav></nav>
      </div>
    </>
  )
}

export default App
