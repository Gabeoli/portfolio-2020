import React, { Component } from 'react'
import ProjectList from './ProjectList'


class ProjectSection extends Component {
    render() {
        return (
            <section id="projects">
                {/* <ul id="project-list">
                    <li>Stamp</li>
                    <li>Okoach</li>
                    <li>HSBC Private Banking</li>
                    <li>The Hubb</li>
                    <li>Ember</li>
                    <li>Pocket Learner</li>
                    <li>GBK Careers</li>
                </ul>
                <div className="showcase-image">
                    <img src={Feature} />
                </div> */}

                <ProjectList/>
            </section>
        )
    }
}

export default ProjectSection
