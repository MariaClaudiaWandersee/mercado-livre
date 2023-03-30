import React from 'react';
// import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const tshirtImage =  require("../../assets/tshirt.png") //o formato de import não funciona para tsx

const Product: React.FC = () =>{
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>
        
        <Column>
          <ProductAction />
          <SellerInfo /> 

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className='title'>
          Compra garantida com o Lorem Ipsum
        </p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro.
        </p>
      </span>
      
      <span>
        <p className='title'>
          Garantia do vendedor
        </p>
        <p className="description">
          Sem garantia
        </p>
      </span>
    </div>
    <a href=''>Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>
      <p>
        Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book    that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.

        <br />
        <br />
        Itens inclusos
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />

        The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.

        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
      </p>
    </h2>
  </Description>
)

export default Product;
