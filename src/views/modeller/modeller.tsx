/*
 * Copyright 2021 Invana
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http:www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import React from "react";
import {Container, Header, Content, Breadcrumb, Nav, Loader} from 'rsuite';
import StudioHeader from "../../layouts/header/header";
import StudioLeftNavSidebar from "../../layouts/sidebar-nav/sidebar-nav";
import {gql, useQuery} from '@apollo/client';
import {GET_SCHEMA_QUERY} from "../../queries/modeller";
import CanvasArtBoard from "../../graph/canvas-artboard";
import {STUDIO_ROUTES} from "../../settings";
import defaultOptions from "../../graph/networkOptions";
import NetworkErrorUI from "../../components/networkError";


const convertModelDataToVisJsData = (responseData: any) => {
    console.log("responseData", responseData);
    let allEdgesModels: any = [];
    let allVertexModels: any = [];
    responseData.getAllVertexModels.map((model: any, index: any) => {
        allVertexModels.push({id: model.name, label: model.name,})
    })

    responseData.getAllEdgesModels.map((model: any, index: any) => {
        model.linkPaths.map((linkPath: any, index: any) => {
            allEdgesModels.push({
                id: model.name + "-" + linkPath.outvLabel + "-" + linkPath.invLabel,
                label: model.name, from: linkPath.outvLabel, to: linkPath.invLabel
            })
        })
    })
    return {nodes: allVertexModels, edges: allEdgesModels}

}

const events = {}
const GraphModellerView = () => {
    const [expand, setExpand] = React.useState(false);
    const [canvasCtrl, setCanvasCtrl] = React.useState(null);

    const {loading, error, data} = useQuery(GET_SCHEMA_QUERY);
    // if (loading) return <p>Loading...</p>;
    if (error) return <NetworkErrorUI error={error}/>;
    let graphData = {nodes: [], edges: []};
    if (!loading) {
        graphData = convertModelDataToVisJsData(data);
    }

    function updateData() {
        console.log("addnewData", canvasCtrl)
        // {id: model.name, label: model.name,}
        if (canvasCtrl) {
            // canvasCtrl.addNewData([{id: "yolo", label: "yolo",}], []);
        }
    }

    console.log("====graphData", graphData)
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>
            <Container>
                <StudioLeftNavSidebar expand={expand} setExpand={setExpand}/>
                <Container>
                    <Header>
                        {/*<Breadcrumb>*/}
                        {/*    /!*<Breadcrumb.Item href={STUDIO_ROUTES.HOME}>Home</Breadcrumb.Item>*!/*/}
                        {/*    <Breadcrumb.Item href={STUDIO_ROUTES.MODELLER} active><strong>GRAPH*/}
                        {/*        MODELLER</strong></Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <Nav activeKey={"home"}>
                            <Nav.Item eventKey="home" onClick={() => updateData()}>Home</Nav.Item>
                            <Nav.Item eventKey="news">News</Nav.Item>
                            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
                            <Nav.Item eventKey="products">Products</Nav.Item>
                            <Nav.Item eventKey="about">About</Nav.Item>
                        </Nav>
                    </Header>
                    <Content>
                        {loading ? (
                            <Loader backdrop content="Fetching schema model ..." vertical/>
                        ) : (
                            <span></span>
                        )}
                        <CanvasArtBoard
                            containerId={"artboard-1"}
                            newData={graphData}
                            options={defaultOptions}
                            events={events}
                            getCanvasCtrl={setCanvasCtrl}
                        />

                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default GraphModellerView;