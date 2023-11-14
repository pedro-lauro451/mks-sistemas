import React from 'react'
import styled from 'styled-components'

const ProductInCartContainer = styled.div`
    border-radius: 8px;
    background: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    width: 379px;
    height: 95px;
    flex-shrink: 0; 
    margin-bottom: 1em;
    display: flex;
    align-items: center;

    & h1 {
      color: #2C2C2C;
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
    }

    & img {
      width: 46px;
      height: 57px; 
    } 
`;

const ProductInCart = (props: any) => {
  return (
    <ProductInCartContainer>
        <img src={props.photo}></img>
        <h1>{props.name}</h1>
        <h1>R${props.price.split(".")[0]}</h1>
    </ProductInCartContainer>
  )
}

export default ProductInCart