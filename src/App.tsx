import './App.scss';
import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeView from "./views/home/home";
import ExploreView from "./views/explorer/explorer";
import Page404 from "./views/page404/page404";
import GraphQLView from "./views/graphql/graphql";
import SchemaView from "./views/schema/schema";
import SettingsView from "./views/settings/settings";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                {/*<Suspense fallback={<div style={{color: "white"}}>Loading...</div>}>*/}
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/explorer" element={<ExploreView/>}/>
                    <Route path="/graphql" element={<GraphQLView/>}/>
                    <Route path="/model" element={<SchemaView/>}/>
                    <Route path="/settings" element={<SettingsView/>}/>
                    <Route element={Page404}/>
                </Routes>
                {/*</Suspense>*/}
            </Router>
        );
    }
}