import React from "react";
import {Container, Header, Content} from 'rsuite';
import StudioLeftSidebar from "../../layouts/sidebar-left/sidebar-left";
import StudioHeader from "../../layouts/header/header";
import StudioLeftNavSidebar from "../../layouts/sidebar-nav/sidebar-nav";


const GraphQLView = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>
            <Container>
                <StudioLeftNavSidebar expand={expand} setExpand={setExpand}/>
                <Container>
                    <Header>
                        <h2>GraphQL Title</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </div>
    );
};

export default GraphQLView;