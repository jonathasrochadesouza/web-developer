import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';
import Livro from './paginas/Livro';
import ListarLivros from './paginas/ListarLivros';
import InserirLivros from './paginas/InserirLivros';
import LayoutTextFields from './paginas/TesteText';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact = {true} component = {HelloMessage}/>,
                <Route path = "/teste" exact = {true} component = {Teste}/>,
                <Route path = "/teste2" exact = {true} component = {LayoutTextFields}/>,
                <Route path = "/livro" exact = {true} component = {Livro}/>,
                <Route path = "/listarLivros" exact = {true} component = {ListarLivros}/>,
                <Route path = "/inserirLivros" exact = {true} component = {InserirLivros}/>; 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;





