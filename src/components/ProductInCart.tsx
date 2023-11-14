"use client";

import React from 'react'
import styled from 'styled-components'
import ProductInCartAmount from './ProductInCartAmount';
import { useState } from 'react';
import { useCart } from './CartContext';

const ProductInCartContainer = styled.div`
    border-radius: 8px;
    background: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    width: 379px;
    min-height: 95px;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    position: relative;
    @media (max-width: 991px) {
      width: 339px;
    }

    & span {
      color: #2C2C2C;
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      padding-top: 0;
      padding-bottom: 0;
    }

    & .deleteIcon {
      color: #fff;
      background-color: #000;
      border-radius: 10px;
      width: 18px;
      height: 18px; 
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }

    & div {
      color: #2C2C2C;
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      padding-top: 0;
      padding-bottom: 0;
      width: 120px;
    } 

    & img {
      width: 46px;
      height: 57px;
      margin-left: 1em; 
      margin-right: 1em;
    } 
`;

const ProductInCart = (props: any) => {
  const { removeFromCart } = useCart();

  const [productAmount, setProductAmount] = useState(1);

  const decreaseAmount = () => {
    if (productAmount !== 1) {
      setProductAmount(productAmount - 1);
    }
  };

  const increaseAmount = () => {
    if (productAmount < 99) {
      setProductAmount(productAmount + 1);
    }
  };

  return (
    <ProductInCartContainer>
      <img src={props.photo}></img>
      <div>{props.name}</div>
      <ProductInCartAmount
        productAmount={productAmount}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount} />
      <span><b>R${props.price.split(".")[0] * productAmount}</b></span>
      <span className="deleteIcon" onClick={() => removeFromCart(props.id)}>X</span>
    </ProductInCartContainer>
  )
}

export default ProductInCart