import React from "react";
import {Container, Header, Content} from 'rsuite';
import StudioLeftSidebar from "../../layouts/sidebar-left/sidebar-left";
import StudioHeader from "../../layouts/header/header";
import "./explorer.scss";
import StudioLeftNavSidebar from "../../layouts/sidebar-nav/sidebar-nav";

const ExploreView = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>
            <Container className={"studio-container"}>
                <StudioLeftNavSidebar expand={expand} setExpand={setExpand}/>
                <Container>
                    <Header>
                        <h2>Explorer Title</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </div>
    );
};

export default ExploreView;