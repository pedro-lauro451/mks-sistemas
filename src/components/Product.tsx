import React from 'react'
import styled from 'styled-components'

const ProductBox = styled.div`
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  font-family: 'Montserrat', sans-serif;
  color: #2C2C2C;
  font-style: normal;
  width: 217px;
  height: 285px; 
  padding: 1em;

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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: space-evenly;
  
  & div {
    width: 50%;
  }
`;
const StoreProduct = (props) => {
  return (
    <ProductBox>
      <FlexContainer>
        <div>
          <h1>{props.name}</h1>
        </div>
        <PriceTag>
          <h1>R$ {props.price}</h1>
        </PriceTag>
      </FlexContainer>
      <p>{props.description}</p>
    </ProductBox>
  )
}

export default StoreProduct