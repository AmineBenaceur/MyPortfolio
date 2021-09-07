import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell, Layout, Drawer, Navigation, Content } from 'react-mdl';
import { format } from 'react-string-format';
import { projectInfo } from './ProjectInfo';

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
        this.projectInfo = projectInfo;
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
