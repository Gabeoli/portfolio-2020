import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/hero_section/HeroSection"
import ProjectSection from "../components/project_section/ProjectSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <HeroSection/>
      <ProjectSection/>
    </div>
  </Layout>
)

export default IndexPage
