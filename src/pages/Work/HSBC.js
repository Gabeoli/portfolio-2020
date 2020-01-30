import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../images/projects/hsbc/HSBC_Hero.jpg"
import FullWidth from "../../images/projects/hsbc/HSBC_FullWidth.jpg"
import Brainstorm from "../../images/projects/hsbc/HSBC_Brainstorm.jpg"
import AppFlow from "../../images/projects/hsbc/HSBC_AppFlow.jpg"
import Wireframes from "../../images/projects/hsbc/HSBC_Wireframes.jpg"
import PrototypeA from "../../images/projects/hsbc/HSBC_PrototypeA.jpg"
import PrototypeB from "../../images/projects/hsbc/HSBC_PrototypeB.jpg"
import PrototypeC from "../../images/projects/hsbc/HSBC_PrototypeC.jpg"
import PrototypeD from "../../images/projects/hsbc/HSBC_PrototypeD.jpg"

const HSBC = () => (
  <Layout>
    <SEO title="HSBC Private Banking" />
    <div className="project-hero">
        <img src={Hero} alt="Hero"/>
        <div className="container">
            <div className="text-group">
                <h1>HSBC Private Banking</h1>
                <p className="tags">UX/UI</p>
                <p className="strap-line">Transforming legacy methods to the digital age.</p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="background-text">
            <p>HSBC Private Banking, an app aimed for the new generation of wealth. HSBC's already existing private banking clientele are elder generation, used to doing things through the phone or in person whereas the new generation are those inherting their families wealth with a grasp with todays technology.</p>
        </div>
        
        <div className="disclaimer">
            <p>The HSBC work implemented here has not been accepted for commercial use by HSBC.</p>
        </div>

        <div className="project-details">
        <ul>
                <li className="role">
                    <h3 className="sub-title">Role</h3>
                    <p>Research, UI Design</p>
                </li>
                <li className="tools">
                    <h3 className="sub-title">Tools</h3>
                    <p>Adobe Creative Suite, Figma</p>
                </li>
            </ul>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Problem</h3>
            <p>The currently problem with online banking is that it hasn't caught up to todays technology with having everything between our fingertips. The current way private banking works is being in contact with a team of advisors from different departments of the bank who help with managing and investing your money. Currently, the means to do this is in person at a branch or through the phone which isn't ideal in todays generation where everything needs to be instant.</p>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Solution</h3>
            <p>An app that has the functions and communcation channels of legacy private banking. With digital natives inheriting old wealth, instant response is needed to control their and grow their money using their finger tips.</p>
        </div>
    </div>

    <div className="full-width-image">
        <img src={FullWidth} alt="Screenshots" />
    </div>
    
    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Ideation</h3>
            <p>To come up with ideas, research about the potential users, learning about how competitors are approaching apps to cater for private banking, and case studies of exisiting banking apps was needed to outline the design. A brainstorm was created to show features needed for private banking.</p>
            <div className="image-holder">
                <img src={Brainstorm} alt="Brainstorm"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Design Process</h3>
            <p>The brainstorm helped decide the flow of the app and helped understand the priorities of the user. Wireframes were then created to help shape the direction of the design.</p>
            <div className="image-holder">
                <img src={AppFlow} alt="App Flow"/>
                <img src={Wireframes} alt="Wireframes"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Final Prototype</h3>
            <p>After creating the wireframes I was able to use the already exisitng branding guidelines with my personal take on how the app design should look like as a prototype.</p>
            <div className="image-holder">
                <img src={PrototypeA} alt="Prototype A"/>
                <img src={PrototypeB} alt="Prototype B"/>
                <img src={PrototypeC} alt="Prototype C"/>
                <img src={PrototypeD} alt="Prototype D"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Reflection</h3>
            <p>As private banking has such a niche demographic, it was up to the research and putting myself into the shoes of someone that would need a private banking app. This was challenging as it was hard to relate to someone with elite wealth, making it difficult to decide the features needed, the goals of the user and testing. However, the case studies done helped understand a general idea of private banking and the common goals for users from the competing companies</p>

            <p>Further exploration and research about this demographic would help to provide a more empathatic approach to my design. Private banking is so customizable that maybe a more modular system would be more beneficial for the user.</p>
        </div>
    </div>
  </Layout>
)

export default HSBC
