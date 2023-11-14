import React from 'react'
import styled from 'styled-components'
import { useCart } from './CartContext';

const ProductBox = styled.div`
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  font-family: 'Montserrat', sans-serif;
  color: #2C2C2C;
  font-style: normal;
  width: 227px;
  height: 300px; 
  margin-top: 1em;
  position: relative;

  & h1 {
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
    overflow-wrap: anywhere;
  }

  & p {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
  }

  & img {
    height: 139px; 
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }
`;

const PurchaseButton = styled.button`
  border-radius: 0px 0px 8px 8px;
  background: #0F52BA;
  border-color: #0F52BA;  
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  width: 100%;
  position: absolute;
  bottom: 0;
  `;

const PriceTag = styled.div`
  border-radius: 10px;
  background: #373737; 
  align-self: flex-start;
  width: 100%;

  & h1 {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }
`;

const PaddingBox = styled.div`
  padding-left: 1em;
  padding-right: 1em;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: space-evenly;
  
  & div {
    width: 50%;
  }
`;

const StoreProduct = (props: any) => {

  const addProduct = () => {
    props.addToCart();
  };

  return (
    <ProductBox>
      <img src={props.photo}></img>
      <PaddingBox>
        <FlexContainer>
          <div>
            <h1>{props.name}</h1>
          </div>
          <PriceTag>
            <h1>R${props.price.split(".")[0]}</h1>
          </PriceTag>
        </FlexContainer>
        <p>{props.description}</p>
      </PaddingBox>

      <PurchaseButton onClick={() => addProduct()}>
        Comprar
      </PurchaseButton>
    </ProductBox>
  )
}

export default StoreProduct