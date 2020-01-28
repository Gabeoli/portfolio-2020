import React, { Component } from 'react'
import Feature from "../../images/projects/stamp/Stamp_Feature_1.jpg"

class ProjectList extends Component {
    render() {

        return (
            <ul className="project-list">
                <li>
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src={Feature}/>
                        </div>
                        <div className="text-container">
                            <div className="text-group">
                                <h2>Stamp</h2>
                                <p>Gamified Running App</p>
                                <div className="case-study-button">
                                    <span>See Case Study</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}


export default ProjectList