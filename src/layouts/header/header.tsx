import {Header, Nav, Navbar, Dropdown} from "rsuite";
import ProjectIcon from "@rsuite/icons/Project";
import GearIcon from "@rsuite/icons/Gear";
import ExploreIcon from "@rsuite/icons/Explore";
import CodeIcon from '@rsuite/icons/Code';
import React from "react";
import HistoryIcon from '@rsuite/icons/History';
import ScatterIcon from '@rsuite/icons/Scatter';
import {HelpOutline} from "@rsuite/icons";
const StudioHeader = () => {

    return (
        <Header>
            <Navbar appearance="inverse">
                <Navbar.Header>
                    <a className="navbar-brand logo" href={"/"} style={{
                        padding: 8,
                        fontSize: 24,
                        fontWeight: 'bold',
                        width: 320,
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
                        {/*<Nav.Item icon={<ProjectIcon/>}>Projects</Nav.Item>*/}
                        {/*<Nav.Item icon={<ExploreIcon/>}>Marketplace</Nav.Item>*/}
                        <Nav.Item href={"/model"} icon={<ScatterIcon/>}>Model</Nav.Item>
                        <Nav.Item href={"/explorer"} icon={<ExploreIcon/>}>Explorer</Nav.Item>
                        <Nav.Item href={"/graphql"} icon={<CodeIcon/>}>GraphQL API</Nav.Item>
                        {/*<Nav.Item icon={<HistoryIcon/>}>History</Nav.Item>*/}
                        {/*<Nav.Item icon={<HistoryIcon/>}>Functions</Nav.Item>*/}
                        {/*<Nav.Item icon={<HistoryIcon/>}>Views</Nav.Item>*/}

                    </Nav>
                    <Nav pullRight>
                        <Nav.Item href={"/settings"} icon={<GearIcon/>}></Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item target={"_blank"} href={"https://docs.invana.io"} icon={<HelpOutline/>}></Nav.Item>
                    </Nav>
                    <Nav pullRight>

                        <Dropdown icon={<ProjectIcon/>} title="publisher-knowledge-modelling">
                            <Dropdown.Item>publisher-knowledge-modelling</Dropdown.Item>
                            <Dropdown.Item>publisher-knowledge-modelling-2</Dropdown.Item>
                            <Dropdown.Item>publisher-knowledge-modelling-3</Dropdown.Item>
                        </Dropdown>
                    </Nav>

                </Navbar.Body>
            </Navbar>
        </Header>
    )
}

export default StudioHeader;