import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell, Layout, Drawer, Navigation, Content } from 'react-mdl';
import { format } from 'react-string-format';
import { projectInfo } from './ProjectInfo';


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
                <CardActions className='card-actions' border >
                    {props.project.links.youtube && (<Button colored style={{ background: 'red', color: 'white', width:'20%', 'border-radius': '8px' }} href={props.project.links.youtube} target="_blank" >Video</Button>)}
                    {props.project.links.github && (<Button colored style={{ background: 'GRAY', color: 'white', width:'20%', 'border-radius': '8px'  }} href={props.project.links.github} target="_blank" > Github</Button>)}
                    {props.project.links.link && (<Button colored style={{ background: 'BLUE', color: 'white', width:'20%', 'border-radius': '8px' }} href={props.project.links.link} target="_blank"> Link </Button>)}
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
        this.state = { activeTab: 'Desktop & Embedded' };
    }


    toggleCategories() {
        return (
            <div className="projects-grid">
                <Grid className="projects-layout-grid">
                    {
                        projectInfo[this.state.activeTab].map(element => {
                            return (<ProjectCell project={element} />)
                        })
                    }
                </Grid>
            </div>
        )
    }

    render() {
        const unClickedStyling = { 
            marginRight: 10, 
            marginLeft: 10, 
            textAlign: 'center', 
            border: '1px solid black', 
            background: 'white', 
            color: 'BLACK', 
        }
        const clickedStyling = {...unClickedStyling, border: '3px solid black', background: 'gray'}

        return (

            <div >
                <Layout fixedDrawer >
                    <Drawer style={{ background: '#BBDBE1', color: 'BLACK', fontWeight: 'bold', fontSize: 22 }} title={(<h4> <strong> By Category: </strong> </h4>)} >

                        <Navigation>
                            {Object.keys(projectInfo).map((key,i) => {
                                const name = (i+1) + '. ' + key
                                const [styling, fullName] = this.state.activeTab === key ? [clickedStyling, <u><strong>{name}</strong></u>] : [unClickedStyling, name];

                                return (
                                    <a style={ styling } href="#" onClick={() => this.setState({ activeTab: key })}> {fullName} </a>
                                )
                            } )}
                           

                        </Navigation>

                    </Drawer>
                    <Content style={{background: 'url(https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
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
