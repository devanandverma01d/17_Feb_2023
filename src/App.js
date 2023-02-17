// Import Statement
import React from 'react'

// import {someNamedImport1,someNamedImport2,....} from 'somelibary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';
import E from './pages/E';
import F from './pages/F';
import G from './pages/G';
import H from './pages/H';
import I from './pages/I';
import J from './pages/J';


export default function App() {
    // Every function rreturn something
    return (
        <Router>
            <Routes>
                <Route path="/" element={<A />}></Route>
                <Route path="/B" element={<B />}></Route>
                <Route path="/C" element={<C />}></Route>
                <Route path="/D" element={<D />}></Route>
                <Route path="/E" element={<E />}></Route>
                <Route path="/F" element={<F />}></Route>
                <Route path="/G" element={<G />}></Route>
                <Route path="/H" element={<H />}></Route>
                <Route path="/I" element={<I />}></Route>
                <Route path="/J" element={<J />}></Route>


            </Routes>
        </Router>
    )
}