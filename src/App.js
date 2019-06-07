import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import ABLogo from './components/ABLogo.png';
import ABLogo1 from './components/ABDevDesign.png';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header  className= "header-color" title={<h3 color="white">  <img
                    src={ABLogo1}
                    alt= "logo"
                    className = "logo-img"
                    />
                    &ensp;

                    <a className="header-link" href="/">Amine Benaceur</a> </h3>}  href="/" scroll>
            <Navigation>
                <Link to="/aboutme"> <strong> About Me </strong> </Link>
                <Link to="/projects"><strong> Projects </strong></Link>
                <Link className="custom-nav-bar-link" to="/resume"><strong>  Resume </strong></Link>
                <Link to="/contact"><strong> Contact</strong></Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Navigation">
            <Navigation>
              <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}
       
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
  
}

export default App;
