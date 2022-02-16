import React from "react";
import {Container, Header, Content} from 'rsuite';
import StudioHeader from "../../layouts/header/header";
import StudioLeftNavSidebar from "../../layouts/sidebar-nav/sidebar-nav";


const HomeView = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className=" ">
            <Container>
                <StudioHeader/>
            </Container>
            <Container>
                <StudioLeftNavSidebar expand={expand} setExpand={setExpand}/>
                <Container>
                    <Header>
                        <h2>Home Title</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </div>
    );
};

export default HomeView;