import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import WebPagePreview from ".././WebPagePreview/WebPagePreview"

const HomePage = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/error")
  }

  useEffect(() => {
    let doc = document.getElementById("og:title")
    doc.setAttribute("content", "Payit - Home")
    return () => {
      doc.setAttribute("content", "Payit - Click here to claim funds")
    }
  })

  return (
    <>
      {/* <WebPagePreview title="Payit - Home" /> */}
      <div>Home Page</div>
      <button onClick={() => handleClick()}>To Error page</button>
    </>
  )
}

export default HomePage
