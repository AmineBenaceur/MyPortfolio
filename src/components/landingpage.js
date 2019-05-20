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
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                         <hr/>

                         <p> HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Java | PHP | MySQL | PostgreSQL </p>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;