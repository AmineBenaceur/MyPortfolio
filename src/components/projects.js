import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell, Layout, Drawer, Navigation, Content } from 'react-mdl';
import { format } from 'react-string-format';

const DrawerNew = (props) => {

    return (
        <h4> <strong> By Category: </strong> </h4>
    )

}

const ProjectCell = (props) => {


    const backgroundImg = format('url({0}) center / cover', props.project.photo);

    return (
        <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', minHeight: '450', margin: 'auto' }} >
                <CardTitle style={{ color: '#fff', height: '176px', background: backgroundImg }}>
                    {props.project.title}
                </CardTitle>
                <CardText>
                    {props.project.description}

                </CardText>
                <CardActions border>
                    {props.project.links.youtube && (<Button colored style={{ background: 'red', color: 'white' }} href={props.project.links.youtube} target="_blank" >Watch Demo!</Button>)}
                    {props.project.links.github && (<Button colored style={{ background: 'GRAY', color: 'white' }} href={props.project.links.github} target="_blank" > Github</Button>)}
                    {props.project.links.link && (<Button colored style={{ background: 'BLUE', color: 'white' }} href={props.project.links.link} target="_blank"> Link </Button>)}
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </Cell>
    )
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    projectInfo = {
        desktopAndEmbedded: [
            {
                title: "Lab Animal Monitor",
                description: "An Animal monitor for lab mice with heartrate and temperature monitoring with remote animal heating control functionality.",
                photo: "https://images.pexels.com/photos/9408866/pexels-photo-9408866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                links: {
                    github: "https://github.com/AmineBenaceur/HIFUAnimalMonitor",
                    youtube: "https://youtu.be/pChgVMOFTHQ",
                    link: ""
                }
            },
            {
                title: "Learning Platform",
                description: "An online learning platform for use of students & professors to fascilitate learning, submit and grade assignments, E-mail communication and enrollment into courses.",
                photo: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                links: {
                    github: "https://github.com/AmineBenaceur/LearningPlatform",
                    youtube: "",
                    link: ""
                }

            },
            {
                title: "VR Haptic Ping Pong",
                description: "A single player virtual Reality Ping Pong game with haptic touch feedback for full immersion. Interfaced with the PHANTOM Omni Device. ",
                photo: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                links: {
                    github: "https://github.com/AmineBenaceur/HapticPingPong",
                    youtube: "https://youtu.be/3jQ1ItvAfz0",
                    link: ""
                }

            },
            {
                title: "Client Server TicTacToe",
                description: " A multi threaded TicTacToe client server Java Desktop application. Supports multiple Players at once.",
                photo: "https://images.pexels.com/photos/3400795/pexels-photo-3400795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                links: {
                    github: "https://github.com/AmineBenaceur/TicTacToeCS",
                    youtube: "",
                    link: ""
                }
            },
            {
                title: "Client Manager",
                description: "A functional java application which implements the MVC design pattern to track clients and info for a company.",
                photo: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                links: {
                    github: "https://github.com/AmineBenaceur/ClientManager",
                    youtube: "",
                    link: ""
                }
            },
            {
                title: "Inventory Tracker",
                description: "A Java application to track inventory items in stock, make orders, browse and search tools & items by various attriubutes.",
                photo: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
                links: {
                    github: "https://github.com/AmineBenaceur/InventoryManager",
                    youtube: "",
                    link: ""
                }
            },
        ],
        webApps: [
            {
                title: "TwitchHub",
                description: "Twitch streaming web application in Laravel to utilize the Twitch API with PostgreSQL. Users can sign up and subscribe to various categories and stream relevant videos from Twitch in their feed.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Twitch_Logo.jpg/800px-Twitch_Logo.jpg",
                links: {
                    github: "https://github.com/AmineBenaceur/TwitchBlog",
                    youtube: "",
                    link: ""
                }
            },
            {
                title: "BookLibrary",
                description: "Book library system developed using Laravel and PostgreSQL. Users can login, browse books, view their attributes and put holds on books.",
                photo: "https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
                links: {
                    github: "https://github.com/AmineBenaceur/BookLibrary",
                    youtube: "",
                    link: ""
                }
            },
            {
                title: "MyBlog",
                description: "A blogging application built using laravel along with PostgreSQL.",
                photo: "https://i2.wp.com/storage.googleapis.com/blog-images-backup/1*2gKr79YTmj2MkP8zLOn-bg.png?resize=1201%2C401&ssl=1",
                links: {
                    github: "https://github.com/AmineBenaceur/MyBlog",
                    youtube: "",
                    link: ""
                }
            },
            {
                title: "FrogBlog",
                description: "Blogging and image sharing application developed using Ruby on Rails and PostgreSQL.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png",
                links: {
                    github: "https://github.com/AmineBenaceur/FrogBlog",
                    youtube: "",
                    link: ""
                }
            },

        ],
        designAndUI: [
            {
                title: "MoneyWatch - Website",
                description: "A website for the MoneyWatch team. Displays information about us, our vision, stakeholders and our published user research findings and methods.",
                photo: "https://www.fijitimes.com/wp-content/uploads/2018/12/getty-stock-market-rising_large.jpg",
                links: {
                    github: "https://github.com/AmineBenaceur/MoneyWatch",
                    youtube: "",
                    link: "https://adarshmelethil.github.io/MoneyWatch/"
                }
            },
            {
                title: "MyPortfolio",
                description: "The portfolio website that you are currently looking at! Originally built for personal use in ReactJS,  but will however soon be available to others as a template.",
                photo: "https://cdn-images-1.medium.com/max/2600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg",
                links: {
                    github: "https://github.com/AmineBenaceur/MyPorfolio",
                    youtube: "",
                    link: "https://aminebenaceur.github.io/"
                }
            },
            {
                title: "ToDoList",
                description: "A front-end To-do list application developed using ReactJS and bootstrap. Was built to use axios as an HTTP client, but was deployed as a static application.",
                photo: "https://www.fijitimes.com/wp-content/uploads/2018/12/getty-stock-market-rising_large.jpg",
                links: {
                    github: "https://github.com/AmineBenaceur/todo",
                    youtube: "",
                    link: "https://aminebenaceur.github.io/todo/"
                }
            },
            {
                title: "MoneyWatch - Prototype",
                description: "A human-computer Interaction focused Prototype for an investment analysis platform. ",
                photo: "https://i0.wp.com/wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png?ssl=1",
                links: {
                    github: "",
                    youtube: "https://www.youtube.com/watch?v=35hq-JhyyAo&t=3s",
                    link: ""
                }
            },
        ]
    }





    toggleCategories() {

        if (this.state.activeTab === 0) { //Desktop & Embedded
            return (
                <div className="projects-grid">
                    <Grid className="projects-layout-grid" style={{ justifyContent: 'space-evenly' }} >
                        {

                            this.projectInfo.desktopAndEmbedded.map(element => {
                                return (<ProjectCell project={element} />)
                            })
                        }

                    </Grid>

                </div>

            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Grid className="projects-layout-grid">
                        {
                            this.projectInfo.webApps.map(element => {
                                return (<ProjectCell project={element} />)
                            })
                        }
                    </Grid>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Grid className="projects-layout-grid">
                        {
                            this.projectInfo.designAndUI.map(element => {
                                return (<ProjectCell project={element} />)
                            })
                        }
                    </Grid>
                </div>

            )
        }
    }


    render() {

        return (

            <div >
                <Layout fixedDrawer >
                    <Drawer style={{ background: '#BBDBE1', color: 'BLACK', fontWeight: 'bold', fontSize: 22 }} title={<DrawerNew />} >

                        <Navigation>

                            {this.state.activeTab === 0 ?
                                (
                                    <a style={{ marginRight: 10, marginLeft: 10, border: '3px solid black', borderColor: 'black', paddingBottom: 20, textAlign: 'center', background: 'gray', color: 'BLACK', }} href="#" onClick={() => this.setState({ activeTab: 0 })} >  <u><strong>1. Desktop / Embedded</strong> </u> </a>
                                ) : (
                                    <a style={{ marginRight: 10, marginLeft: 10, textAlign: 'center', border: '1px solid black', background: 'white', color: 'BLACK' }} href="#" onClick={() => this.setState({ activeTab: 0 })} >1. Desktop / Embedded</a>
                                )
                            }

                            {this.state.activeTab === 1 ?
                                (
                                    <a style={{ marginRight: 10, marginLeft: 10, textAlign: 'center', border: '3px solid black', background: 'gray', color: 'BLACK', }} href="#" onClick={() => this.setState({ activeTab: 1 })}>  <u><strong>2. Web Applications</strong> </u> </a>
                                ) : (
                                    <a style={{ marginRight: 10, marginLeft: 10, textAlign: 'center', border: '1px solid black', background: 'white', color: 'BLACK', }} href="#" onClick={() => this.setState({ activeTab: 1 })}>2. Web Applications</a>
                                )
                            }

                            {this.state.activeTab === 2 ?
                                (
                                    <a style={{ marginRight: 10, marginLeft: 10, textAlign: 'center', border: '3px solid black', background: 'gray', color: 'BLACK', }} href="#" onClick={() => this.setState({ activeTab: 2 })}>   <u><strong>3. UI Design & Prototypes</strong> </u></a>
                                ) : (
                                    <a style={{ marginRight: 10, marginLeft: 10, textAlign: 'center', border: '1px solid black', background: 'white', color: 'BLACK' }} href="#" onClick={() => this.setState({ activeTab: 2 })}>3. UI Design & Prototypes</a>
                                )
                            }


                        </Navigation>

                    </Drawer>
                    <Content >
                        <div className="projects-container">

                            <div className="category-tabs" >
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