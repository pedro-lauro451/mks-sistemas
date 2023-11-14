import React from 'react'
import styled from 'styled-components'

const AmountContainer = styled.div`
    max-width: 50px;
    height: 19px;
    border-radius: 4px;
    border: 0.3px solid #BFBFBF;
    background: #FFF;     
    display: flex;
    justify-content: space-around;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    font-family: 'Montserrat', sans-serif;
    margin-right: 1em;

    & span {
        cursor: pointer;
        -webkit-user-select: none;
        -ms-user-select: none; 
        user-select: none;
    }
`;

const ProductInCartAmount = (props: any) => {
    
    return (
        <AmountContainer>
            <span onClick={props.decreaseAmount}>-</span>
            <span>{props.productAmount}</span>
            <span onClick={props.increaseAmount}>+</span>
        </AmountContainer>
    )
}

export default ProductInCartAmount