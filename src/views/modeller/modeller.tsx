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
import {Container, Header, Content, Breadcrumb} from 'rsuite';
import StudioHeader from "../../layouts/header/header";
import StudioLeftNavSidebar from "../../layouts/sidebar-nav/sidebar-nav";
import {gql, useQuery} from '@apollo/client';
import {getAllEdgesModelsQuery} from "../../queries/modeller";
import CanvasArtBoard from "../../graph/canvas-artboard";
import {STUDIO_ROUTES} from "../../settings";


// create an array with nodes
var nodes = [
    {id: 1, label: "Node 1"},
    {id: 2, label: "Node 2"},
    {id: 3, label: "Node 3"},
    {id: 4, label: "Node 4"},
    {id: 5, label: "Node 5"},
];

// create an array with edges
var edges = [
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 3},
];

// create a network
var graphData = {
    nodes: nodes,
    edges: edges,
};
const defaultOptions = {
    physics: {
        stabilization: false,
    },
    autoResize: true,
    edges: {
        smooth: false,
        color: "#000000",
        width: 0.5,
        arrows: {
            to: {
                enabled: true,
                scaleFactor: 0.5,
            },
        },
    },
    nodes: {
        // physics: false,
        shape: "dot",
        // size: 10,
        scaling: {
            min: 10,
            max: 10,
        },
        shapeProperties: {
            interpolation: true    // 'true' for intensive zooming
        }
    }
};
const GraphModellerView = () => {
    const [expand, setExpand] = React.useState(true);
    const {loading, error, data} = useQuery(getAllEdgesModelsQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <StudioHeader/>
            </Container>
            <Container>
                <StudioLeftNavSidebar expand={expand} setExpand={setExpand}/>
                <Container>
                    <Header>
                        {/*<h2>Graph Modeller</h2>*/}
                        <Breadcrumb>
                            <Breadcrumb.Item href={STUDIO_ROUTES.HOME}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href={STUDIO_ROUTES.MODELLER} active>Graph Modeller</Breadcrumb.Item>
                            {/*<Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>*/}
                        </Breadcrumb>
                    </Header>
                    <Content>
                        {/*indexes, labels, properties, strategies*/}
                        {/*{*/}
                        {/*    data.getAllEdgesModels.map((item: any, index: any) => (*/}
                        {/*        <Panel key={index}>*/}
                        {/*            <p>*/}
                        {/*                {JSON.stringify(item)}: {index}*/}
                        {/*            </p>*/}
                        {/*        </Panel>*/}
                        {/*    ))*/}
                        {/*}*/}
                        <CanvasArtBoard containerId={"artboard-1"} data={graphData} options={defaultOptions}/>

                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default GraphModellerView;