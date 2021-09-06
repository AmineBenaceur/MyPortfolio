import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell, Layout, Drawer, Navigation, Content } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) { //Desktop & Embedded
            return (
                <div className="projects-grid">
                    <Grid className="projects-layout-grid">
                        <Cell>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/9408866/pexels-photo-9408866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
                                    Lab Animal Monitor
                                </CardTitle>
                                <CardText>
                                    An Animal monitor for lab mice with heartrate and temperature monitoring with remote animal heating control functionality. 

                                </CardText>
                                <CardActions border>
                                    <Button colored style={{background:'red', color:'white'}} href="https://youtu.be/pChgVMOFTHQ" target="_blank" > Watch Demo</Button>
                                    <Button colored style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/HIFUAnimalMonitor" target="_blank" > Github</Button>
                                </CardActions>
                                <CardMenu style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
                                    Learning Platform
                                </CardTitle>
                                <CardText>
                                    An online learning platform for use of students & professors to fascilitate learning, submit and grade assignments, E-mail communication and enrollment into courses.
                                </CardText>
                                <CardActions border>
                                    <Button colored style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/LearningPlatform" target="_blank"> GitHub</Button>
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
                                    VR Haptic Ping Pong
                                </CardTitle>
                                <CardText>
                                    A single player virtual Reality Ping Pong game with haptic touch feedback for full immersion. Interfaced with the PHANTOM Omni Device. 

                                </CardText>
                                <CardActions border>
                                    <Button colored style={{background:'red', color:'white'}} href="https://youtu.be/3jQ1ItvAfz0" target="_blank" > Watch Demo</Button>
                                    <Button colored style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/HapticPingPong" target="_blank" > GitHub</Button>
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/3400795/pexels-photo-3400795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
                                    Client Server TicTacToe
                                </CardTitle>
                                <CardText>
                                    A multi threaded TicTacToe client server Java Desktop application. Supports multiple Players at once.
                                </CardText>
                                <CardActions border>
                                    <Button colored style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/TicTacToeCS" target="_blank" > GitHub</Button>
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
                                    Client Manager
                                </CardTitle>
                                <CardText>
                                    A functional java application which implements the MVC design pattern to track clients and info for a company.
                                </CardText>
                                <CardActions border>
                                    <Button colored style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/ClientManager" target="_blank"> GitHub</Button>

                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}>          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                                Inventory Tracker
                            </CardTitle>
                            <CardText>
                                A Java application to track inventory items in stock, make orders, browse and search tools & items by various attriubutes.
                            </CardText>
                            <CardActions border>
                            <Button colored style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/InventoryManager" target="_blank"> GitHub</Button>

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
                <div className="projects-grid">
                    {/* <Grid className="projects-layout-grid">
                        <Cell col={4}> */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Twitch_Logo.jpg/800px-Twitch_Logo.jpg) center / cover' }}>
                            TwitchHub
                        </CardTitle>
                        <CardText>
                            Twitch streaming web application in Laravel to utilize the Twitch API with PostgreSQL. Users can sign up and subscribe to various categories and stream relevant videos from Twitch in their feed.
                        </CardText>
                        <CardActions border>
                            <Button colored  style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/TwitchBlog" target="_blank"> GitHub</Button>

                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* </Cell>
                        <Cell col={4}>      */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                            BookLibrary
                        </CardTitle>
                        <CardText>
                            Book library system developed using Laravel and PostgreSQL. Users can login, browse books, view their attributes and put holds on books.
                        </CardText>
                        <CardActions border>
                            <Button colored  style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/BookLibrary" target="_blank" > GitHub</Button>

                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* </Cell>
                        <Cell col={4}>     */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i2.wp.com/storage.googleapis.com/blog-images-backup/1*2gKr79YTmj2MkP8zLOn-bg.png?resize=1201%2C401&ssl=1) center / cover' }}>
                            MyBlog
                        </CardTitle>
                        <CardText>
                            A blogging application built using laravel along with PostgreSQL.
                        </CardText>
                        <CardActions border>
                            <Button colored  style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/MyBlog" target="_blank"> GitHub</Button>


                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* </Cell>
                        
                    </Grid> */}

                </div>

            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Grid className="projects-layout-grid">
                        <Cell col={4}><Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.fijitimes.com/wp-content/uploads/2018/12/getty-stock-market-rising_large.jpg) center / cover' }}>
                                MoneyWatch - Website
                            </CardTitle>
                            <CardText>
                                A website for the MoneyWatch team. Displays information about us, our vision, stakeholders and our published user reaserch and reaserch methods.
                            </CardText>
                            <CardActions border>
                                <Button colored  style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/MoneyWatch" target="_blank"> GitHub</Button>
                                <Button colored style={{background:'BLUE', color:'white'}} href="https://adarshmelethil.github.io/MoneyWatch/" target="_blank"> Link </Button>
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
                                The portfolio website that you are currently looking at! Originally built for personal use in ReactJS,  but will however soon be available to others as a template.
                            </CardText>
                            <CardActions border>
                                <Button colored  style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/MyPorfolio" target="_blank" > GitHub</Button>
                                <Button colored style={{background:'BLUE', color:'white'}} href="https://aminebenaceur.github.io/" target="_blank"> Link </Button>
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
                                <Button colored  style={{background:'GRAY', color:'white'}} href="https://github.com/AmineBenaceur/todo" target="_blank"> GitHub</Button>
                                <Button colored  style={{background:'BLUE', color:'white'}} href="https://aminebenaceur.github.io/todo/" target="_blank"> Link </Button>

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
                                <Button colored href="https://www.youtube.com/watch?v=35hq-JhyyAo&t=3s" target="_blank">> Live Demo</Button>

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
        else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png) center / cover' }}>
                            FrogBlog
                        </CardTitle>
                        <CardText>
                            Blogging and image sharing application developed using Ruby on Rails and PostgreSQL.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/AmineBenaceur/FrogBlog" target="_blank"> GitHub</Button>

                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>
            )
        }
    }


    render() {

        return (

            <div >
                <Layout fixedDrawer >
                    <Drawer style={{background:'#9fe1e3', color:'BLACK',fontWeight: 'bold', fontSize: 25}} title="Project Categories:">
                        <hr/>
                        <Navigation>
                            
                            { this.state.activeTab===0 ? 
                                (
                                <a style={{ marginRight:10,marginLeft:10, border:'3px solid black',borderColor: 'black',paddingBottom:20,textAlign:'center',background:'gray', color:'BLACK', }} href="#" onClick={() => this.setState({ activeTab: 0 })} >  <u><strong>1. Desktop / Embedded</strong> </u> </a> 
                                ) : (
                                <a style={{ marginRight:10,marginLeft:10,textAlign:'center',border:'1px solid black',background:'lightgray', color:'BLACK'}} href="#" onClick={() => this.setState({ activeTab: 0 })} >1. Desktop / Embedded</a> 
                                )
                            }

                           { this.state.activeTab===1 ? 
                                (
                                <a style={{marginRight:10,marginLeft:10,textAlign:'center',border:'3px solid black',background:'gray', color:'BLACK', }}href="#" onClick={() => this.setState({ activeTab: 1 })}>  <u><strong>2. Web Applications</strong> </u> </a>
                                ) :(
                                <a style={{marginRight:10,marginLeft:10,textAlign:'center',border:'1px solid black',background:'lightgray', color:'BLACK', }}href="#" onClick={() => this.setState({ activeTab: 1 })}>2. Web Applications</a>
                                )
                            }

                           { this.state.activeTab===2 ? 
                                (
                                <a style={{marginRight:10,marginLeft:10,textAlign:'center',border:'3px solid black',background:'gray', color:'BLACK', }}href="#" onClick={() => this.setState({ activeTab: 2 })}>   <u><strong>3. UI Design & Prototypes</strong> </u></a>
                                ) : (
                                <a style={{marginRight:10,marginLeft:10,textAlign:'center',border:'1px solid black',background:'lightgray', color:'BLACK'}}href="#" onClick={() => this.setState({ activeTab: 2 })}>3. UI Design & Prototypes</a>
                                )
                            }
                            
                        
                        </Navigation>
                    <hr></hr>
                    </Drawer>
                    <Content >
                        <div className="projects-container">

                            <div className="category-tabs" >
                                {/*
                            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                                <Tab className="projects-catagory-tab" style={{ color: 'white', size: '18px;'}}>
                                    <strong className="tabstrong">ReactJS & HTML/CSS</strong>
                                </Tab>
                                
                                <Tab className="projects-catagory-tab" style={{ color: 'white'}}>
                                    <strong>Java </strong> 
                                </Tab>
                                <Tab className="projects-catagory-tab" style={{ color: 'white'}}>
                                    <strong> PHP / Laravel </strong> 
                                </Tab>
                                <Tab className="projects-catagory-tab"style={{ color: 'white'}}>
                                    <strong>Ruby on Rails </strong> 
                                </Tab>
                            </Tabs>
                        */}
                                <Grid >
                                    <Cell col={12}>
                                        <div className="projects-background">
                                        </div>
                                        <div className="content" > {this.toggleCategories()} </div>
                                    </Cell>
                                </Grid>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>

        )
    }
}

export default Projects;