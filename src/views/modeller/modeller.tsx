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
import {Container, Header, Content, Breadcrumb, Loader} from 'rsuite';
import StudioHeader from "../../layouts/header/header";
import StudioLeftNavSidebar from "../../layouts/sidebar-nav/sidebar-nav";
import {gql, useQuery} from '@apollo/client';
import {GET_SCHEMA_QUERY} from "../../queries/modeller";
import CanvasArtBoard from "../../graph/canvas-artboard";
import {STUDIO_ROUTES} from "../../settings";
import defaultOptions from "../../graph/networkOptions";


// export const physicsSettings = {
//
//     forceAtlas2Based: {
//         gravitationalConstant: -56,
//         centralGravity: 0.005,
//         springLength: STUDIO_SETTINGS.RENDERING_EDGES_SETTINGS.length,
//         springConstant: 0.18,
//         avoidOverlap: 1.5
//     },
//     maxVelocity: 146,
//     solver: 'forceAtlas2Based',
//     timestep: 0.35,
//     stabilization: {
//         enabled: true,
//         iterations: 1000,
//         updateInterval: 50,
//         // fit: true
//     }
//
// }
// const defaultOptions = {
//     physics: physicsSettings,
//
//     autoResize: true,
//     edges: {
//         smooth: false,
//         color: "#000000",
//         width: 0.5,
//         arrows: {
//             to: {
//                 enabled: true,
//                 scaleFactor: 0.5,
//             },
//         },
//         chosen: {
//             edge: function (values: any, id: string, selected: any, hovering: any) {
//                 console.log("=====", id, selected, hovering);
//                 values.width = values.width * 1.5;
//             }
//         },
//         selectionWidth: function (width: any) {
//             return width * 1.2;
//         },
//         // hoverWidth: function (width) {
//         //     return width * 1.4;
//         // }
//         hoverWidth: function (width: any) {
//             return width + 1;
//         },
//     },
//     nodes: {
//         // physics: false,
//         shape: "dot",
//         // size: 10,
//         scaling: {
//             min: 10,
//             max: 10,
//         },
//         shapeProperties: {
//             interpolation: true    // 'true' for intensive zooming
//         }
//     }
// };


const convertResponseToVisJsData = (responseData: any) => {
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
const GraphModellerView = () => {
    const [expand, setExpand] = React.useState(true);
    const {loading, error, data} = useQuery(GET_SCHEMA_QUERY);
    // if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let graphData = {nodes: [], edges: []};
    if (!loading) {
        graphData = convertResponseToVisJsData(data);
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
                        <Breadcrumb>
                            {/*<Breadcrumb.Item href={STUDIO_ROUTES.HOME}>Home</Breadcrumb.Item>*/}
                            <Breadcrumb.Item href={STUDIO_ROUTES.MODELLER} active><strong>GRAPH
                                MODELLER</strong></Breadcrumb.Item>
                        </Breadcrumb>
                    </Header>
                    <Content>
                        {loading ? (
                            <Loader backdrop content="loading..." vertical/>
                        ) : (
                            <span></span>
                        )}
                        <CanvasArtBoard containerId={"artboard-1"} data={graphData} options={defaultOptions}/>

                    </Content>
                </Container>
            </Container>
        </div>
    );
};

export default GraphModellerView;