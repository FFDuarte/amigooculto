import React from 'react';

import { BrowserRouter ,Switch , Route } from 'react-router-dom';


//  ADMIN
import Usuarios from './pages/usuarios';
import Editar from './pages/usuarios/editarUsuario';
import Cadastrar from './pages/usuarios/novoUsuario';
import Sorteio  from './pages/sorteio';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/*Rotas CLiente */}
                <Route path="/" exact component={Usuarios} />
                <Route path="/usuarios/editar" exact component={Editar} />
                <Route path="/usuarios/cadastrar" exact component={Cadastrar} />
                <Route path="/sorteio" exact component={Sorteio} />
        
            </Switch>
        </BrowserRouter>
    )
}