import React, { Component } from 'react'
import { Link } from "gatsby"

class ProjectListItem extends Component {
    render() {

        return (
            <li>
                <div className="feature-container">
                    <div className="feature-image">
                        <img src={this.props.feature} alt="Project Feature"/>
                    </div>
                    <div className="text-container">
                        <div className="text-group">
                            <h2>{this.props.projectName}</h2>
                            <p>{this.props.children}</p>
                            <div className="case-study-button">
                                <Link to={"Work/" + this.props.link}>
                                    <span>See Case Study</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ProjectListItem
