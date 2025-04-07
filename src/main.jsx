import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./components/UserContext.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <main className="background">
          <App />
        </main>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
)
