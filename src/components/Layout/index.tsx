import React from 'react';
import Header from '../Header';
import { Container, Wrapper } from './styles';
import Product from '../Product';
import Footer from '../Footer';

const Layout: React.FC = () =>{
  return (
    <Container> {/*Página inteira*/}
      <Header />
      
      <Wrapper> {/*Tamanho do conteúdo*/}
        <Product /> 
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Layout;