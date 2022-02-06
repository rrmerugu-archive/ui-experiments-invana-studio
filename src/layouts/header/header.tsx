import {Header, Nav, Navbar} from "rsuite";
import ProjectIcon from "@rsuite/icons/Project";
import GearIcon from "@rsuite/icons/Gear";
import React from "react";


const StudioHeader = () => {
    return (
        <Header>
            <Navbar appearance="inverse">
                <Navbar.Header>
                    <a className="navbar-brand logo" style={{
                        padding: 14,
                        fontSize: 18,
                        fontWeight: 'bold',
                        width: 260,
                        height: 56,
                        // background: '#34c3ff',
                        color: ' #fff',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        display: 'block',
                        borderRight: '1px solid #efefef'
                    }}>Invana Studio</a>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<ProjectIcon/>}>Projects</Nav.Item>
                        {/*<Nav.Item icon={<ExploreIcon/>}>Marketplace</Nav.Item>*/}
                        {/*<Nav.Item>Products</Nav.Item>*/}
                        {/*<Dropdown title="About">*/}
                        {/*    <Dropdown.Item>Company</Dropdown.Item>*/}
                        {/*    <Dropdown.Item>Team</Dropdown.Item>*/}
                        {/*    <Dropdown.Item>Contact</Dropdown.Item>*/}
                        {/*</Dropdown>*/}
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item icon={<GearIcon/>}>Settings</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </Header>
    )
}

export default StudioHeader;