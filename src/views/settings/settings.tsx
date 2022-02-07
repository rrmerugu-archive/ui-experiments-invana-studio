import React from "react";
import {Container, Header, Content, Row, Col, Panel, Nav} from 'rsuite';
import StudioLeftSidebar from "../../layouts/sidebar-left/sidebar-left";
import StudioHeader from "../../layouts/header/header";


const SettingsView = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>

            <Container>
                <Row style={{"marginTop": "100px"}}>
                    <Col xs={14} xsOffset={4}>

                        <Panel bordered style={{"backgroundColor": "white"}}>
                            <Nav appearance={"subtle"}
                                // activeKey={active}
                                // onSelect={onSelect} style={styles}
                                //
                            >
                                <Nav.Item eventKey="home">
                                    Graph Info
                                </Nav.Item>
                                <Nav.Item eventKey="news">Connections</Nav.Item>
                                {/*<Nav.Item eventKey="solutions">Solutions</Nav.Item>*/}
                                {/*<Nav.Item eventKey="products">Products</Nav.Item>*/}
                                <Nav.Item eventKey="about">About</Nav.Item>
                            </Nav>

                            {/*<Header>*/}
                            {/*    <h2>Settings Title</h2>*/}
                            {/*</Header>*/}
                            <Content>Content</Content>
                        </Panel>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default SettingsView;