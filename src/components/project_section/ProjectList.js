import React, { Component } from 'react'
import ProjectListItem from "./ProjectListItem" 

import StampFeature from "../../images/projects/stamp/Stamp_Feature_1.jpg"
import OkoachFeature from "../../images/projects/okoach/Okoach_Feature.jpg"
import HSBCFeature from "../../images/projects/hsbc/HSBC_Feature.jpg"
import GBKFeature from "../../images/projects/gbk/GBK_Feature.jpg"

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

                <ProjectListItem
                    feature={HSBCFeature}
                    projectName="HSBC"
                    link="HSBC"
                >
                    Private Banking App
                </ProjectListItem>

                <ProjectListItem
                    feature={GBKFeature}
                    projectName="GBK Careers"
                    link="GBK"
                >
                    Website Re-Design
                </ProjectListItem>
            </ul>
        )
    }
}


export default ProjectList