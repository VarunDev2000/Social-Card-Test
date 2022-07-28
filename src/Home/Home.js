import React from "react"
import { useNavigate } from "react-router-dom"
import WebPagePreview from ".././WebPagePreview/WebPagePreview"

const HomePage = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/error")
  }

  return (
    <>
      <WebPagePreview
        title="Payit Home"
        metaDescription="Welcome to home of Payit"
      />
      <div>Home Page</div>
      <button onClick={() => handleClick()}>To Error page</button>
    </>
  )
}

export default HomePage
