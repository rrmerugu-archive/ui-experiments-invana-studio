import React, {FC} from "react";
import {Container, Header, Content, Sidebar, Sidenav, Dropdown, Nav, Navbar} from 'rsuite';
import StudioLeftSidebar from "./sidebar-left/sidebar-left"
import StudioHeader from './header/header';
//
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const iconStyles = {
    width: 56,
    height: 56,
    padding: 18,
    lineHeight: '56px',
    textAlign: 'center'
};


const DefaultLayout = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>
            <Container>
                <StudioLeftSidebar expand={expand} setExpand={setExpand}/>
                <Container>
                    <Header>
                        <h2>Page Title</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </div>
    );
};

export default DefaultLayout;