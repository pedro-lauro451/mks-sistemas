import React from 'react'
import styled from 'styled-components'

const ProductInCartContainer = styled.div`
    border-radius: 8px;
    background: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    width: 379px;
    height: 95px;
    flex-shrink: 0; 
`;

const ProductInCart = () => {
  return (
    <ProductInCartContainer>
        ProductInCart
    </ProductInCartContainer>
  )
}

export default ProductInCart