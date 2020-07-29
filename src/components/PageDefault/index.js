import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'; // usa css no JavaScript
// todo componente precisa de um estrutura em volta
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;
function PageDefault({ children }){
    return(
        <> 
            <Menu />
                <Main>
                    { children }
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;