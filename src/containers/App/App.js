import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import config from '../../config';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  componentWillReceiveProps() {

  }

  handleLogout = (event) => {
    event.preventDefault();
  };

  render() {
    const styles = require('./App.scss');
    const basicLogo = require('./basic-logo.png');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#ffffff'}}>
                <div className={styles.brand}/>
                <span><img src={basicLogo} width="125" /></span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="/sobre">
                <NavItem eventKey={1}>Sobre</NavItem>
              </LinkContainer>

              <LinkContainer to="/contato">
                <NavItem eventKey={2}>Contato</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div className={styles.appContent}>
          {this.props.children}
        </div>


      </div>
    );
  }
}
