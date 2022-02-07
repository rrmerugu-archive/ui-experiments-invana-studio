import React from "react";
import {Container, Header, Content} from 'rsuite';
import StudioLeftSidebar from "../../layouts/sidebar-left/sidebar-left";
import StudioHeader from "../../layouts/header/header";


const SchemaView = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>
            <Container>
                {/*<StudioLeftSidebar expand={expand} setExpand={setExpand}/>*/}
                {/*<Container>*/}
                    <Header>
                        <h2>Model Title</h2>
                    </Header>
                    <Content>Content</Content>
                {/*</Container>*/}
            </Container>
        </div>
    );
};

export default SchemaView;