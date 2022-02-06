import React, {FC} from "react";
import {Nav, Navbar, Sidebar, Sidenav} from "rsuite";
import DashboardIcon from '@rsuite/icons/Dashboard';
import PcIcon from '@rsuite/icons/Pc';
import ExploreIcon from "@rsuite/icons/Explore";
import ArrowLeftIcon from "@rsuite/icons/ArrowLeft";
import ArrowRightIcon from "@rsuite/icons/ArrowRight";


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

const StudioLeftSidebar: FC<StudioLeftSidebarProps> = ({expand, setExpand}) => {
    return (
        <Sidebar
            style={{display: 'flex', flexDirection: 'column'}}
            width={expand ? 260 : 56}
            collapsible
        >
            <Sidenav.Header>
                <div style={{
                    padding: 18,
                    fontSize: 16,
                    height: 56,
                    // background: '#34c3ff',
                    // color: ' #fff',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                }}>
                    <ExploreIcon style={{fontSize: 20}}/>
                    <span style={{marginLeft: 12}}> BRAND</span>
                </div>
            </Sidenav.Header>
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" active icon={<ExploreIcon/>}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<ExploreIcon/>}>
                            Graphs
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<ExploreIcon/>}>
                            Functions
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<ExploreIcon/>}>
                            Management
                        </Nav.Item>

                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)}/>
        </Sidebar>
    )
}

export default StudioLeftSidebar;