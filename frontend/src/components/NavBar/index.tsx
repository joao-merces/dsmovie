/*Arquivos .tsx são html's para react */

import {ReactComponent as GithubIcon} from 'assets/img/github.svg'      //Importa o modulo ReactComponet com o nome 'GithubIcon' da pasta 'assets/img/github.svg' (Toda vez que formos usar essa imagem basta usar o nome 'GithubIcon')
import './styles.css'                                                   //Importa o arquivi styles.css para usarmos o mesmo para fazer a aparencia do site

function NavBar(){                                                      //Cria a função chamada NavBar
    return(                                                             //Retorna um cabeçario descrito da linha 8n até a 19
    <header>                                                            
        <nav className="container"> 
        <div className="dsmoovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/joao-merces"></a>
            <div className="dsmovie-contact-conteiner">
            <GithubIcon/>
            <p className="dsmovie-contact-link">/joao-merces</p>
            </div>
        </div>
        </nav>
    </header>
    );
}

export default NavBar;