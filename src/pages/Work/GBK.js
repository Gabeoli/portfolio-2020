import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../images/projects/gbk/GBK_Hero.jpg"
import FullWidthOne from "../../images/projects/gbk/GBK_FullWidth.jpg"
import Wireframes from "../../images/projects/gbk/GBK_Wireframes.jpg"
import Homepage from "../../images/projects/gbk/GBK_Homepage.jpg"
import Jobs from "../../images/projects/gbk/GBK_Jobs.jpg"



const GBKCareers = () => (
  <Layout>
    <SEO title="GBK Careers" />
    <div className="project-hero">
        <img src={Hero} alt="Hero"/>
        <div className="container">
            <div className="text-group">
                <h1>GBK Careers</h1>
                <p className="tags">Website Re-design</p>
                <p className="strap-line">Provide information about GBK for potential employees</p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="background-text">
            <p>GBK's careers website aims to tell the story about the humble beginnings of the chain while also listing the available positions throughout all of their restaurants.</p>
        </div>

        <div className="project-details">
            <ul>
                <li className="role">
                    <h3 className="sub-title">Role</h3>
                    <p>Wireframing, Prototyping</p>
                </li>
                <li className="tools">
                    <h3 className="sub-title">Tools</h3>
                    <p>Adobe Creative Suite</p>
                </li>
            </ul>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Brief</h3>
            <p>The previous GBK careers website was an out of date, and confusing website for people looking to work for them. A competition was set up to re-design the website, following a certain criteria. The website needed to retain the functions of looking and applying for job roles, tell people about the story of GBK, and inform people about GBK's work life, while not straying too far from the original brand (logo). </p>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Approach</h3>
            <p>The approach to the design was taking my experience as someone who went through the website to apply for a job and improving things visually. The main goal of the user is to find a role and ideally filter locations and types of roles. Secondary to finding a job was to learn more about the company.</p>
        </div>
    </div>

    <div className="full-width-image">
        <img src={FullWidthOne} alt ="Okoach Screenshots"/>
    </div>

    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Wireframes</h3>
            <p>A quick outline of what needed to be on each page. Ideally created to have 3 clicks to reach a job application.</p>
            <div className="image-holder">
                <img src={Wireframes} alt="Wireframes"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Final Outcome</h3>
            <p>The final outcome was two designed pages, the homepage and job listings for the competition. I incorporated bright colours with browns representing the burgers and buns with blue as a contrasting colour. The type faces used were taken form the logo and the cursive typface taken from the the menu at the time. The homepage flows from story, hiring tips then to job listings to aid a potential employee with what GBK's mission and story is.</p>

            <div className="image-holder">
                <img src={Homepage} alt="Homepage"/>
                <img src={Jobs} alt="Job Listings"/>
            </div>
        </div>
    </div>

  </Layout>
)

export default GBKCareers
