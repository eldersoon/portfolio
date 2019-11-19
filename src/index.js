import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles';
import SquareAnimation from './components/animations/SquareAnimation';
import Navbar from './components/navbar/Navbar';

/**
 * Pages
 */
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Fragment>
        
            <GlobalStyle />
            <SquareAnimation/>

        <BrowserRouter>
            <Navbar className="container"/>
            <Switch>
            
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
        
    </Fragment>
    , document.getElementById('root')
);

