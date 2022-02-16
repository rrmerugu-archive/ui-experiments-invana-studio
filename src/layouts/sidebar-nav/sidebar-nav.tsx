import React, {FC} from "react";
import {Nav, Navbar, Sidebar, Sidenav, Row, Grid} from "rsuite";
import DashboardIcon from '@rsuite/icons/Dashboard';
import PcIcon from '@rsuite/icons/Pc';
import ExploreIcon from "@rsuite/icons/Explore";
import ScatterIcon from '@rsuite/icons/Scatter';
import BranchIcon from '@rsuite/icons/Branch';
import ArrowLeftIcon from "@rsuite/icons/ArrowLeft";
import ArrowRightIcon from "@rsuite/icons/ArrowRight";
import Input from 'rsuite/Input';
import List from 'rsuite/List';
import Col from 'rsuite/Col';
import {useLocation} from "react-router-dom";


interface StudioLeftSidebarProps {
// any other props that come into the component, you don't have to explicitly define children.
    expand: boolean,
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
}

interface NavToggleProps {
// any other props that come into the component, you don't have to explicitly define children.
    expand: boolean,
    onChange: React.MouseEventHandler<HTMLButtonElement>
}

const NavToggle: FC<NavToggleProps> = ({expand, onChange}) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{width: 56, textAlign: 'center'}}>
                        {expand ? <ArrowLeftIcon/> : <ArrowRightIcon/>}
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};


const StudioLeftNavSidebar: FC<StudioLeftSidebarProps> = ({expand, setExpand}) => {
    const [activeMenu, setActiveMenu] = React.useState("/modeller");
    let location = useLocation();

    return (
        <Sidebar
            style={{display: 'flex', flexDirection: 'column'}}
            width={expand ? 220 : 56}
            collapsible
        >
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item href={"/modeller"} eventKey="2" active={location.pathname === "/modeller"} icon={<BranchIcon/>}>
                            Modeller
                        </Nav.Item>
                        <Nav.Item href={"/explorer"} eventKey="1" active={location.pathname === "/explorer"} icon={<ScatterIcon/>}>
                            Explorer
                        </Nav.Item>
                        <Nav.Item href={"/graphql"} eventKey="2" active={location.pathname === "/graphql"} icon={<ExploreIcon/>}>
                            GraphQL API
                        </Nav.Item>
                        {/*<Nav.Item href={"/functions"} eventKey="2" active={location.pathname === "/functions"} icon={<ExploreIcon/>}>*/}
                        {/*    Functions*/}
                        {/*</Nav.Item>*/}
                        {/*<Nav.Item href={"/management"} eventKey="2" active={location.pathname === "/management"} icon={<ExploreIcon/>}>*/}
                        {/*    Management*/}
                        {/*</Nav.Item>*/}

                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)}/>
        </Sidebar>
    )
}

export default StudioLeftNavSidebar;