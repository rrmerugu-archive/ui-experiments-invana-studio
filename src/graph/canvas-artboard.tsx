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
import Graph from "./visjs-react";
import {GraphCanvasCtrl} from "./canvas-ctrl";


type GraphDataType = {
    nodes: Array<any>;
    edges: Array<any>;
}

class CanvasArtBoard extends React.Component<{
    newData: GraphDataType, containerId: string,
    options: object, events: object,
    getCanvasCtrl: object
}, {}> {

    private canvasCtrl: GraphCanvasCtrl;

    constructor(props: any) {
        super(props);
        this.canvasCtrl = new GraphCanvasCtrl({})
        props.getCanvasCtrl(this.canvasCtrl);
        this.canvasCtrl.addNewData(this.props.newData.nodes, this.props.newData.edges)
    }

    // static propTypes = {
    //     elementId: PropTypes.string,
    //     // resetVisualizer: PropTypes.bool,
    //     // setSelectedElementData: PropTypes.func,
    //     // setNodeMenuPosition: PropTypes.func,
    //     // setNetwork: PropTypes.func,
    //     data: PropTypes.object,
    //     // edges: PropTypes.array,
    //     options: PropTypes.object,
    //     // stopRenderingGraph: PropTypes.func,
    //     // hiddenNodeLabels: PropTypes.array,
    //     // hiddenEdgeLabels: PropTypes.array
    // }

    // shouldComponentUpdate() {
    //     return this.props.resetVisualizer;
    //     // return nextProps.value !== this.props.value;
    // }


    // setNetwork(network) {
    //     this.props.setNetwork(network)
    //     this.network = network;
    // }

    render() {
        console.log("=====defaultOptions", JSON.stringify(this.props.newData));
        const newData = this.canvasCtrl.getData()
        console.log("=====getData", newData)
        return (
            <div className={"canvasContainer w-100 h-100"}>
                <Graph
                    containerId={this.props.containerId}
                    data={this.props.newData}
                    options={this.props.options}
                    events={this.props.events}
                    getNetwork={(network) => this.canvasCtrl.setNetwork(network)}
                    // getNodes={this.props.getNodes}
                    // getEdges={this.props.getEdges}
                    // getNodes={getNodes}
                />
            </div>
        )
    }
}

export default CanvasArtBoard;