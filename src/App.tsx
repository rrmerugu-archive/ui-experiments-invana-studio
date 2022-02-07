import './App.scss';
import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/layout";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                {/*<Suspense fallback={<div style={{color: "white"}}>Loading...</div>}>*/}
                    <Routes>
                        <Route path="/" element={<DefaultLayout/>}/>
                        {/*<Route element={Page404View}/>*/}
                    </Routes>
                {/*</Suspense>*/}
            </Router>
        );
    }
}