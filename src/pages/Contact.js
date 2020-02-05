import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-page">
      <div className="container">
        <div className="centered-text">
          <h1>Collaboration? Collaboration.</h1>
          <p className="big-text">Shoot me an email if you're interested in having a chat.</p>
          <p className="email">gd.olivar@gmail.com</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact