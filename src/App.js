import logo from "./logo.svg"
import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import WebPagePreview from "./WebPagePreview/WebPagePreview"
import ErrorPage from "./ErrorPage/ErrorPage"
import HomePage from "./Home/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/error" exact element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
