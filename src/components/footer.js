import React, { Component } from 'react'

import LinkedIn from "../images/icons/linkedin_icon.svg"
import Github from "../images/icons/github_icon.svg"
import Behance from "../images/icons/behance_icon.svg"

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="social-media">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/gabriel-olivar/" target="_blank" rel="noopener noreferrer">
                                        <img src={LinkedIn} alt="LinkedIn"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Gabeoli">
                                        <img src={Github} alt="Github"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.behance.net/GabeOli">
                                        <img src={Behance} alt="Behance"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="signature">
                            <p>Gabriel Dean Olivar - Designed and Developed</p>
                            <p>2020</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
