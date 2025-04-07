import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"
import SingleArticle from "./components/SingleArticle"
import Topics from "./components/Topics"
import { Navigate, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <header className="parent">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<SingleArticle />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="*" element={<Navigate to="/articles" />} />
        </Routes>
      </main>
      <nav></nav>
    </>
  )
}

export default App
