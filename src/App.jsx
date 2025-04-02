import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"
import SingleArticle from "./components/SingleArticle"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <header className="parent">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route path="/:articleId" element={<SingleArticle />}></Route>
        </Routes>
      </main>
      <nav></nav>
    </>
  )
}

export default App
