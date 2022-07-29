import React from "react"
import Helmet from "react-helmet"

const WebPagePreview = (props) => {
  const { title = "Payit - Click here to claim funds" } = props

  return (
    <Helmet>
      <meta property="og:site_name" content="Payit" />
      <meta id="title" property="og:title" content={title} />

      <meta property="og:description" content="" />
      <meta
        property="og:image"
        itemprop="image"
        content="https://social-card-test.herokuapp.com/Payit_logo.png"
      />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:type" content="website" />
      <meta property="og:updated_time" content="1440432930" />
      <meta
        property="og:url"
        content="https://social-card-test.herokuapp.com/"
      />

      <meta name="twitter:card" content="summary_large_image" />

      {/* <meta
      name="twitter:description"
      content="Web site created using create-react-app"
    /> */}
    </Helmet>
  )
}

export default WebPagePreview
