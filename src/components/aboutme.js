import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePhoto from './ProfilePhoto.jpg';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={6} allign={"center"}>
                        <div className="ProfilePhoto-container">
                            <img
                                src={ProfilePhoto}
                                alt=""
                                className="profile-img"
                            />
                        </div>

                    </Cell>
                    <Cell col={6} allign="center">
                        <div className="about-me-wrapper" >
                            <div className="about-me-text">
                                <h2 > Nice to meet you! </h2>
                                <p> <span className="about-me-span"> I'm Amine, a Software Engineering graduate based in Calgary, Alberta who enjoys Hardware Interfacing and building things that live on the web. My experience includes a 12-month internship working on hardware interfacing and desktop application development in the field of Focused Ultrasound. My interests include Web-System Design, Cyber Security, and Human-Computer Interaction but are growing every day. When I'm not programming, I prefer to be playing sports or enjoying the outdoors.</span>  </p>
                            </div>
                            <br />
                        </div>
                    </Cell>


                </Grid>
            </div>
        )
    }
}

export default About;
