import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import WebPagePreview from ".././WebPagePreview/WebPagePreview"

const HomePage = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/error")
  }

  useEffect(() => {
    document.getElementsByTagName("meta")["og:title"].content = "Hello"
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
