import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Grid className="projects-layout-grid">
                        <Cell col={4}><Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover' }}>
                                MoneyWatch - Website
                    </CardTitle>
                            <CardText>
                                A website for the MoneyWatch team. Displays information about us, our vision, stakeholders and our published user reaserch and reaserch methods. 
                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/MoneyWatch" target="_blank"> GitHub</Button>
                                <Button colored href="https://aminebenaceur.github.io/MoneyWatch/" target="_blank"> Link </Button>
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell col={4}>         <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover' }}>
                                MyPortfolio
                                </CardTitle>
                            <CardText>
                                The portfolio website that you are currently looking at! Originally built for myself in ReactJS,  but will however soon be available to others as a template.
            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/MyPorfolio" target="_blank" > GitHub</Button>
                                <Button colored> Live Demo</Button>
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell col={4}>                 <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.hubspot.com/hubfs/To_Do_List.png) center / cover' }}>
                                ToDoList
        </CardTitle>
                            <CardText>
                                A front-end To-do list application developed using ReactJS and bootstrap. Was built to use axios as an HTTP client, but was deployed as a static application. 
        </CardText>
                            <CardActions border>
                                <Button colored> GitHub</Button>
                                <Button colored> Live Demo</Button>
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell col={4}>          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i0.wp.com/wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png?ssl=1) center / cover' }}>
                                MoneyWatch - Prototype
            </CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </CardText>
                            <CardActions border>
                                <Button colored> GitHub</Button>
                                <Button colored> Live Demo</Button>
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                    </Grid>







                </div>

            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div><h2>This is Java & MySQL</h2></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h2>Laravel & postgreSQL </h2></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h2>Ruby On Rails </h2></div>
            )
        }
    }


    render() {
        return (
            <div className="projects-container">

                <div className="category-tabs" >
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab><strong>React & HTML/CSS/JS</strong></Tab>
                        <Tab><strong>Java & MySQL</strong> </Tab>
                        <Tab><strong> Laravel & postgreSQL</strong> </Tab>
                        <Tab> <strong>Ruby on Rails </strong> </Tab>
                    </Tabs>
                    <Grid >
                        <Cell col={12}>
                            <div className="projects-background">
                            </div>
                            <div className="content" > {this.toggleCategories()} </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Projects;