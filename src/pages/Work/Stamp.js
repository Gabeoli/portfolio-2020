import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Feature from "../../images/projects/stamp/Stamp_Feature_1.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Stamp" />
    <div className="project-hero">
        <img src={Feature} alt="pics"/>
        <div className="text-group">
            <h1>Stamp</h1>
            <p>UX/UI Design</p>
            <p>Something Something Something</p>
        </div>
    </div>
  </Layout>
)

export default SecondPage
