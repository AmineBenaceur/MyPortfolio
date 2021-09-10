import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import ABLogo1 from "./components/ABDevDesign.png";

function App() {
  return (
    <div>
      <Layout fixedHeader style={{ display: "flex" }}>
        <Header
          className="header-color"
          title={
            <a className="header-link" href="/">
              <img src={ABLogo1} alt="logo" className="logo-img" />
            </a>
          }
          href="/"
          scroll
        >
          <Navigation>
            <Link to="/aboutme">
              <strong> About Me </strong>
            </Link>
            <Link to="/projects">
              <strong> Projects </strong>
            </Link>
            <Link className="custom-nav-bar-link" to="/resume">
              <strong> Resume </strong>
            </Link>
            <Link to="/contact">
              <strong> Contact</strong>
            </Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
