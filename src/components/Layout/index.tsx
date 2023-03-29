import React from 'react';
import { Container, Wrapper } from './styles';
import Product from '../Product';

const Layout: React.FC = () =>{
  return (
    <Container> {/*Página inteira*/}
      {/* <Header /> */}
      
      <Wrapper> {/*Tamanho do conteúdo*/}
        <Product /> 
      </Wrapper>
      
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;