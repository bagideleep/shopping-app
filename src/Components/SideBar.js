import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import NavItem from './NavItem';
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    css: 'fa fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/Products',
                    name: 'Products',
                    css: 'fa fa-fw fa-clipboard-list',
                    key: 2
                },
                {
                    path: '/NoMatch',
                    name: 'NoMatch',
                    css: 'fas fa-not-equal',
                    key: 3
                },
            ]
        }
    }
        onItemClick = (path) => {
            this.setState({ activePath: path}); /* Sets activePath which causes rerender which causes CSS to change */
        }
        render() {
            const { items, activePath } = this.state;
            return (
                <StyledSideNav>
                    {
                       items.map((item) => {
                            return (
                                <NavItem path={item.path} name={item.name} 
                                css={item.css} onItemClick={this.onItemClick}
                                active={item.path === activePath} key={item.key}/>
                            )
                        })
                    }
                </StyledSideNav>
            );
        }
    }

    const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav>
            </RouterSideNav>
        );
    }
}