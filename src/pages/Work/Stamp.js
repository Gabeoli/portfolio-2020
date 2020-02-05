import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../images/projects/stamp/Stamp_Hero.jpg"
import FullWidthOne from "../../images/projects/stamp/Stamp_FullWidth_1.jpg"
import Persona from  "../../images/projects/stamp/Stamp_Persona.jpg"
import DesignRequirements from "../../images/projects/stamp/Stamp_DesignRequirements.jpg"
import ExperienceMap from "../../images/projects/stamp/Stamp_ExperienceMap.jpg"
import JourneyMap from "../../images/projects/stamp/Stamp_JourneyMap.jpg"
import ServiceBlueprint from "../../images/projects/stamp/Stamp_ServiceBlueprint.jpg"
import Wireframes from "../../images/projects/stamp/Stamp_Wireframes.jpg"
import Branding from "../../images/projects/stamp/Stamp_Branding.jpg"
import StampPrototypeA from "../../images/projects/stamp/Stamp_PrototypeA.jpg"
import StampPrototypeB from "../../images/projects/stamp/Stamp_PrototypeB.jpg"
import StampPrototypeC from "../../images/projects/stamp/Stamp_PrototypeC.jpg"

const Stamp = () => (
  <Layout>
    <SEO title="Stamp" />
    <div className="project-hero">
        <img src={Hero} alt="Hero"/>
        <div className="container">
            <div className="text-group">
                <h1>Stamp</h1>
                <p className="tags">Product Design - UX/UI</p>
                <p className="strap-line">Run to leave your mark on the world.</p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="background-text">
            <p>Stamp is a mobile app which mixes gamification with running within the real world. Players will go head to head with other players using running to capture, control and protect areas around the world.</p>
        </div>

        <div className="project-details">
            <ul>
                <li className="role">
                    <h3 className="sub-title">Role</h3>
                    <p>Research, Wireframing, Prototyping</p>
                </li>
                <li className="Tools">
                    <h3 className="sub-title">Tools</h3>
                    <p>Adobe Creative Suite, Figma</p>
                </li>
            </ul>
        </div>

        <div className="project-section" id="problem">
            <h3 className="sub-title">Problem</h3>
            <p>Many people find difficulty when starting to train and while running is one of the most basic forms of exercise, they also lack the motivation or find it boring. When starting training, nowadays, it seems to revolve around a gym which requires a motivation itself to stay committed to, could cost a lot and could be disinteresting to a beginner. General training goals are to be healthier and fitter but beginners also have no idea how to track if they are improving.</p>
        </div>

        <div className="project-section" id="solution">
            <h3 className="sub-title">Solution</h3>
            <p>Gamification, more specifically, the form of player vs player (PvP), is a key motivator within sports. Putting runners head to head would boost motivation, therefore, improving performance. The main challenge was to make users think more about beating other players instead of the action of running so that their main focus is enjoyment rather than "I need to get fitter". This is where the implementation of common board game mechanic known as "Area Control" was introduced to shift the focus away from the chore of running.</p>
        </div>
    </div>

    <div className="full-width-image">
        <img src={FullWidthOne} alt="Stamp Screenshots"/>
    </div>

    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Research</h3>
            <p>To learn more about the demographic for this idea, I created a simple quantitive survey for people with ranging running abilities, zero experience to competitive runners. The results provided an age range for the demographic and that many people have a good aptitude for using technology. The survey also confirmed assumptions about enjoyment and motivation with <strong>61.3%</strong> of people scoring 5 or lower out of 10, 10 being highly motivated to run. A persona based on the results can be created to help understand the user goals and frustrations and outline design/system requirements, experience maps and a service blueprint to aid the design.</p>
        </div>

        <div className="project-section" id="persona">
            <h3 className="sub-title">Persona</h3>
            <div className="image-holder">
                <img src={Persona} alt="Persona"/>
            </div>

        </div>

        <div className="project-section">
            <h3 className="sub-title">Design Requirements</h3>
            <p>Based on the needs of the persona, a list of design requirements were created as a baseline for the products experience.</p>
            <div className="image-holder">
                <img src={DesignRequirements} alt="Design Requirement Table" />
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Users Experience</h3>
            <p>To outline how Stamp will be able to help the persona reach their goals, I used an experience map. The map starts from an unfit lifestyle where they discover Stamp leading to the ongoing usage where they are getting fitter of to their "blue sky goal" of running a marathon.</p>
            <div className="image-holder">
                <img src={ExperienceMap} alt="Experience Map" />
            </div>
            <p className="mid-p">A journey map was also made to mark pivot points for the persona's emotions while using Stamp from short-term to long-term/continuous usage and how their frustrations are tackled.</p>
            <div className="image-holder">
                <img src={JourneyMap} alt="Journey Map" />
            </div>
            <p className="mid-p">Lastly, a service blueprint was used to specify the actions when using Stamp which outlines the touchpoints and events to help decide what screens were needed to begin the design and prototyping.</p>
            <div className="image-holder">
                <img src={ServiceBlueprint} alt="Service Blueprint"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Branding</h3>
            <p>Establishing the brand was the first part of the design process. The companies associated with the persona were a good indication of what a successful sports identity is; bright colours and loud typefaces.</p>
            <div className="image-holder">
                <img src={Branding} alt="Branding"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Ideation</h3>
            <p>The idea for the design was generated from a user-centred approach using the experience map, journey map and service blueprint a foundation of needs to reach the user's goals. The implementation of area control was developed from war-type board games with maps of the world, so why not use the real world as the map for area control?</p>
        </div>
    </div>

    <div className="full-width-image">
        <img src={Wireframes} alt="Wireframes"/>
    </div>

    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Prototype</h3>
            <p>The final design turned took some inspiration from the 80s science fiction movie, Tron, using neon colours to represent different players and their areas that they control. The overall interface has minimal buttons with a straight-forward user experience giving the user the immediate choice to run. Exploring further into the app, you will find a friends list and leaderboard where users can track the difference in performance with other players. Lastly, to bring the focus back to fitness goals each run will store a running log so that users will be able to see their progress.</p>

            <div className="image-holder">
                <img src={StampPrototypeA} alt="Stamp Prototype 1"/>
                <img src={StampPrototypeB} alt="Stamp Prototype 2"/>
                <img src={StampPrototypeC} alt="Stamp Prototype 3"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Reflection</h3>
            <p>As a university project, this was something I was pretty excited about, mainly because the process of producing a new product showed the feasibility of it actually being made. I enforced an empathetic user-centred approach of a product designer while combining the research and implementation of a UX researcher which really helped me understand the ins and outs of creating with a goal in mind. From a design perspective I pretty much had free-reign which is always nice, but rather than doing what I feel would suit me, the persona really outlined the brand identity and UI.</p>
        </div>
    </div>
  </Layout>
)

export default Stamp
