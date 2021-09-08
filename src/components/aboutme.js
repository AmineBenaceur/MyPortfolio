import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePhoto from './ProfilePhoto.png';
import UIDesign from './UIDesign.png';
import FullStack from './FullStack.png';
import BugIcon from './BugIcon.jpg';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={5}>
                        <div className="ProfilePhoto-container">
                            <img
                                src={ProfilePhoto}
                                alt=""
                                className="profile-img"
                            />

                        </div>

                    </Cell>
                    <Cell col={7}>
                        <div className="about-me-wrapper" >
                            {/* <hr/> */}
                            <div className="about-me-text">
                                <h2 > Nice to meet you! </h2>
                                {/* <hr/> */}
                                <p> <span className="about-me-span"> I'm Amine, a <strong>Software Engineering graduate</strong> based in <strong>Calgary, Alberta</strong> who enjoys Hardware Interfacing and building things that live on the web. My experience includes a <strong> 12-month internship </strong> working on hardware interfacing and desktop application development in the field of Focused Ultrasound. My interests include <strong>Web-System Design</strong>, <strong> Cyber Security</strong>, and <strong>Human-Computer Interaction</strong> but are growing every day. When I'm not programming, I prefer to be playing sports or enjoying the outdoors.</span>  </p>
                            </div>
                            <br />
                            {/* <hr/> */}

                        </div>
                    </Cell>


                </Grid>
            </div>
        )
    }
}

export default About;