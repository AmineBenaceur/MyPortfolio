import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import AminoAvatar from './AminoAvatar.png'
import ContactUs from './ContactForm';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <div className="contact-left">
                            <h2>Amine Benaceur</h2>

                            <img
                                src={AminoAvatar}
                                alt=""
                                className="contact-img"
                            />
                            
                            <span className="contact-quote-span">" When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong. "</span>
                            
                            
                            <span className="contact-quote-span" > - R. Buckminster Fuller </span>
                            
                            
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <h2> Let's Chat! </h2>
                        <div className="wrap-contact-list">
                            <div className="contact-list">
                                < ContactUs />
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
