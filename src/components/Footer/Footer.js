
import React from "react";
import PropTypes from "prop-types";
import Identicon from 'identicon.js';
import makeBlockie from 'ethereum-blockies-base64';


import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://web3vm.com/?ref=bdr-user-archive-footer">Web3vm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://swag0x.com/presentation?ref=bdr-user-archive-footer">Swag0x</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://onelaw.us/blog?ref=bdr-user-archive-footer">WorldLaw</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://onelaw.us/blog?ref=bdr-user-archive-footer">X5Engine</NavLink>
            </NavItem>
          </Nav>
          
          <div className="copyright">
            © {new Date().getFullYear()}{" "}
             by{" "}
            <a
              href="https://web3vm,cin?ref=bdr-user-archive-footer"
              target="_blank"
            >
              Web3 Legal Engineering
            </a>{" "}
            for a better Web3 experience.



          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
