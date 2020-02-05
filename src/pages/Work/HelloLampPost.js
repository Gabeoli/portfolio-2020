import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../images/projects/hlp/HLP_Hero.jpg"
import FullWidth from "../../images/projects/hlp/HLP_FullWidth.jpg"
import Moodboard from "../../images/projects/hlp/HLP_Moodboard.jpg"
import Brainstorm from "../../images/projects/hlp/HLP_Brainstorm.jpg"
import Wireframes from "../../images/projects/hlp/HLP_Wireframes.jpg"
import FullWidthTwo from "../../images/projects/hlp/HLP_FullWidthTwo.jpg"
import ScreenshotOne from "../../images/projects/hlp/HLP_Screenshot1.jpg"
import ScreenshotTwo from "../../images/projects/hlp/HLP_Screenshot2.jpg"
import ScreenshotThree from "../../images/projects/hlp/HLP_Screenshot3.jpg"



const GBKCareers = () => (
  <Layout>
    <SEO title="Hello Lamp Post" />
    <div className="project-hero">
        <img src={Hero} alt="Hero"/>
        <div className="container">
            <div className="text-group">
                <h1>Hello Lamp Post</h1>
                <p className="tags">Website Re-design, Brand Refresh</p>
                <p className="strap-line">Pull more clients and make the relationship more personal.</p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="background-text">
            <p>Hello Lamp Post aims to improve public engagement with clients working with the public and private sector. A website is an integral part of conveying information to potential clients.</p>
        </div>

        <div className="project-details">
            <ul>
                <li className="role">
                    <h3 className="sub-title">Role</h3>
                    <p>Wireframing, Prototyping, Brand Identity, SEO</p>
                </li>
                <li className="tools">
                    <h3 className="sub-title">Tools</h3>
                    <p>Adobe Creative Suite, Figma, Google Analytics, GatsbyJS, Sass, Git</p>
                </li>
            </ul>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Problem</h3>
            <p>Before joining Hello Lamp Post I found it hard to find information about the company and what they do, and it was only until the CEO explained it to me then I understood it. The website was one-pager with very limited content and was very difficult to grasp HLP's goals and product. Using Google Analytics, I found the average retention time to be <strong>01:15mins long</strong>, possibly due to the lack of content. Site speed was also a problem, rated 17 on PageSpeed Insights, due to images not being optimized causing longer load time.</p>
            
            <p>Some of the character illustrations used for the brand-identity had a dated style and could be improved to have more personality without straying from the existing flat art-style.</p>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Solution</h3>
            <p>Refresh the character design for the brand to add personality and relatability for clients and players. Use the newly created characters designs across other HLP documents/assets including the website re-design. Use a modern framework such as GatsbyJS to develop a new website and optimize images for faster page speeds.</p>
        </div>
    </div>

    <div className="full-width-image">
        <img src={FullWidth} alt="Full Width"/>
    </div>

    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Character Design</h3>
            <p>Inspiration for the new character designs was taken from many sources that had a flat-design style. Creating a mood board helped see different aspects of other character designs which worked with the current style of illustrations we already had. The design also had to be modular so that it could relate to clients and players across the globe.</p>
        </div>

        <div className="image-holder">
            <img src={Moodboard} alt="Mood Board"/>
        </div>
    </div>

    <div className="full-width-image">
        <img src={FullWidthTwo} alt="Full Width Characters"/>
    </div>

    <div className="container">
        <div className="project-section">
            <h3 className="sub-title">Website Planning</h3>
            <p>Before designing the website, a brainstorm of the content was made and ranked in order of importance based on previous clients needs when using Hello Lamp Post. This created an outline of the pages to be added to form wireframes.</p>

            <div className="image-holder">
                <img src={Brainstorm} alt="Brainstorm"/>
                <img src={Wireframes} alt="Wireframes"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Design</h3>
            <p>After consulting with the team about ideas for the new website, their opinions on the design were not to stray too far from the previous on-pager. When approaching the design I took the existing design and broke it into sections that we wanted and altered or removed things we didn't. Each page had different goals but the similarities in all of them were to inform, taking into consideration clients and curious users journey.</p>

            <div className="image-holder">
                <img src={ScreenshotOne} alt="Website Screenshot"/>
                <img src={ScreenshotTwo} alt="Website Screenshot"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Development</h3>
            <p>With the release of Facebooks React framework, many static site generators have come about with GatsbyJS being at the forefront with its lightning speed which would be perfect to help reduce loading time.</p>

            <h3 className="sub-title">Approach</h3>
            <p>A mobile-first approach was taken as generally most internet content is consumed through smartphone devices. For version control, I used GitHub where I would commit when a major component for the website has been finished coded. For styling Sass was used to break up the different stylings per page and component, future-proofing it to be easily accessible if an edit is to be made.</p>

            <p>
                <a href="https://github.com/PANstudio/Hello-V2" target="_blank" rel="noopener noreferrer">View GitHub Repository</a>
            </p>

            <div className="image-holder">
                <img src={ScreenshotThree} alt="Website Screenshot"/>
            </div>
        </div>

        <div className="project-section">
            <h3 className="sub-title">Outcome & Reflection</h3>
            <p>Overall I'm happy with the outcome as the improvement to speed is substantially better. I took into consideration the teams suggestions for the website and were all very excited about the changes. The increased depth of the website should also improve the SEO which means a boost in clients/sales.</p>

            <p>The process of recreating the character design was not well received at first as the team members were comfortable with the original. However, after showing the application of it within presentations, social media and other HLP documents they saw the value as it brought more personality to the company.</p>

            <p>Lastly, the company site re-design. Like the character design, many of the team were already comfortable with the existing site but I saw the potential for growth. To convince them it was necessary for change, I added Google Analytics to learn about the retention rate and tested site speed to provide evidence for my reasons. From this I learnt as a designer, not everyone around sees the potential of something and that it's up to me to enlighten them through an empathetic approach and communicating in a language that they understand.</p>
        </div>
    </div>

  </Layout>
)

export default GBKCareers
