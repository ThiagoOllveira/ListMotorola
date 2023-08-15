import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Router,
    Routes
} from 'react-router-dom';
import Cadastrar from '../pages/cadastrar';
import ListaBooks from '../pages/ListaBooks';
import NotFound from '../pages/NotFounf';

const Root = ()=> {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <ListaBooks />} />
                <Route path="/administrar/cadastrar" element={ <Cadastrar />} />
                <Route path="^" element={ <NotFound />} />
            </Routes>
        </Router>
    )
}