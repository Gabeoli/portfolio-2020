import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../images/projects/okoach/Okoach_Hero.jpg"
import FullWidthOne from "../../images/projects/okoach/Okoach_FullWidth_1.jpg"
import Persona from "../../images/projects/okoach/Okoach_Persona.jpg"
import AppMap from "../../images/projects/okoach/Okoach_AppMap.jpg"
import Wireframes from "../../images/projects/okoach/Okoach_Wireframes.jpg"
import Branding from "../../images/projects/okoach/Okoach_Branding.jpg"
import PrototypeA from "../../images/projects/okoach/Okoach_PrototypeA.jpg"
import PrototypeB from "../../images/projects/okoach/Okoach_PrototypeB.jpg"
import PrototypeC from "../../images/projects/okoach/Okoach_PrototypeC.jpg"
import PrototypeD from "../../images/projects/okoach/Okoach_PrototypeD.jpg"


const Okoach = () => (
  <Layout>
    <SEO title="Okoach" />
    <div className="project-hero">
        <img src={Hero} alt="Hero"/>
        <div className="container">
            <div className="text-group">
                <h1>Okoach</h1>
                <p className="tags">Product Design - UX/UI - Front-End Development</p>
                <p className="strap-line">Create, distribute and log traning programmes</p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="background-text">
            <p>Okoach is an online coaching mobile app aimed towards both the elite level of coaching or the average gym-goer. The app allows coaches to create, edit and distribute training programmes to their athletes while their athlete can track their training.</p>
        </div>

        <div className="project-details">
            <ul>
                <li className="role">
                    <h3 className="sub-title">Role</h3>
                    <p>Research, Wireframing, Development</p>
                </li>
                <li className="tools">
                    <h3 className="sub-title">Tools</h3>
                    <p>Adobe Creative Suite, Figma, React Native</p>
                </li>
            </ul>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Problem</h3>
            <p>The problem for coaches looking to expand through online means is the ability to organise their training programmes for their athletes. Many online coaches have the technology to do this however they use tools that they already know such as Excel spreadsheets, word documents, or designed PDFs to showcase their training programme and send via email or online-messenger. This snowballs into even more disorganisation as they grow their clientele.</p>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Solution</h3>
            <p>The solution was to Okoach, a mobile app puts all the communcation channels of online training onto your mobile. Coaches and athletes will be able to use it during the sessions and always stay on track with their training.</p>
        </div>
    </div>

    <div className="full-width-image">
        <img src={FullWidthOne} alt ="Okoach Screenshots"/>
    </div>

    <div className="container">

        <div className="project-section">
            <h3 className="sub-title">Research</h3>
            <p>The main forms of research conducted were interviews and questionnaires. I interviewed coaches that have experience with clients ranging from beginners to professional athletes. They explained their process and how they managed data where the most common tool was an Excel Spreadsheet which was a good form of organisation post and pre-training, however, hard to use during.</p>
        </div>

        <div className="image-holder">
            <h3 className="sub-title">Persona</h3>
            <p>From the interviews and survey results, a persona was created that represented both a coach and an athlete which will be the main demographic for Okoach. This outlined the user's goals.</p>
            <img src={Persona} alt="Persona"/>
        </div>

        <div className="project-section">
            <h3 className="sub-title">User Goals</h3>
            <ul>
                <li>Organise training programmes</li>
                <li>Edit training programmes on the go</li>
                <li>Gain clients</li>
                <li>Save Time</li>
            </ul>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Design Process</h3>
            <p>An app map was created to help outline the user journey based on the goals which lead to wireframes.</p>
            <div className="image-holder">
                <img src={AppMap} alt="App Map"/>
            </div>
        </div>
    </div>

    <div className="full-width-image">
        <img src={Wireframes} alt="Wireframes"/>
    </div>

    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Branding</h3>
            <p>The colours took inspiration from brands such as Nike and Under Armour for the typeface while the red represents the colour of the heaviest barbell plates. The iconography also took inspiration from weights on a barebell.</p>

            <div className="image-holder">
                <img src={Branding} alt="Branding"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Final Design</h3>
            <div className="image-holder">
                <img src={PrototypeA} alt="Prototype A"/>
                <img src={PrototypeB} alt="Prototype B"/>
                <img src={PrototypeC} alt="Prototype C"/>
                <img src={PrototypeD} alt="Prototype D"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Development Process</h3>
            <p>To test my front-end skills, the Okoach screens were converted into an app using React Native, using tools such as Styled Components for styling and Git for version control. You can see the repo <a href="https://github.com/Gabeoli/Okoach" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Reflection</h3>
            <p>This was my final year project for university where I combined a hobby of mine with the profession I want to get involved with. This project was an interesting challenge as it was the first time taking something from an idea, researching the feasibility and finally designing and developing it.</p>

            <p>My main takeaway from this is that I really enjoy the process of creating a product. My challenges mainly came from the development stage as I was learning while I was coding. But once I finished the project, I learnt to React which is a skill that is pretty valuable today in tech.</p>
        </div>
    </div>
  </Layout>
)

export default Okoach
