import React, {Component} from 'react';
import {Tabs,Tab} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div><h2> this is React & HTML/CSS/JS</h2></div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h2>This is Java & MySQL</h2></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h2>Laravel & postgreSQL </h2></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h2>Other</h2></div>
            )
        }
    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React & HTML/CSS/JS</Tab>
                    <Tab>Java & MySQL </Tab>
                    <Tab> Laravel & postgreSQL </Tab>
                    <Tab> Other </Tab>
                </Tabs>
                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;