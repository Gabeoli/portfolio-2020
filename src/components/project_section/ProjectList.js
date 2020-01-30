import React, { Component } from 'react'
import ProjectListItem from "./ProjectListItem" 

import StampFeature from "../../images/projects/stamp/Stamp_Feature_1.jpg"
import OkoachFeature from "../../images/projects/okoach/Okoach_Feature.jpg"

class ProjectList extends Component {
    render() {

        return (
            <ul className="project-list">
                <ProjectListItem
                    feature={StampFeature}
                    projectName="Stamp"
                    link="Stamp"
                >
                    Gamified Running App
                </ProjectListItem>

                <ProjectListItem
                    feature={OkoachFeature}
                    projectName="Okoach"
                    link="Okoach"
                >
                    Workout Planner App
                </ProjectListItem>
            </ul>
        )
    }
}


export default ProjectList