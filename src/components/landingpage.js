import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
import AminoAvatar from './AminoAvatar.png';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col={12}>

                    <img
                    src={AminoAvatar}
                    alt= "avatar"
                    className = "avatar-img"
                    />
                    <div className="banner-text" >
                        <h1>Amine Benaceur</h1>
                         <hr/>
                         <p> HTML+CSS | React | JavaScript | Python | Java | Node.js | Ruby/Rails | MySQL | PostgreSQL </p>
                        <div className="social-links">
                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/amine-benaceur-8a624b170/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                        </a>
                         {/* GitHub*/}
                         <a href="https://github.com/AmineBenaceur" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"></i>
                        </a>
                          {/* Youtube */}
                          <a href="https://www.youtube.com/channel/UCQXgGmVBzIh9TmXWudIv0Gw" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square"  aria-hidden="true"></i>
                        </a>
                        
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;