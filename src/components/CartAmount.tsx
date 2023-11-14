import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { useCart } from './CartContext';

const CartAmountContainer = styled.div`
    margin-left: auto;
    border-radius: 8px;
    background: #FFF; 
    width: 90px;
    height: 45px;
    flex-shrink: 0; 
    display:flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-right: 2em;

    & span {
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        margin-left: 1em;
        -webkit-user-select: none;
        -ms-user-select: none; 
        user-select: none;
    }
`;

const CartAmount = () => {
    const { toggleCartVisibility, cartItems } = useCart();
    return (
        <CartAmountContainer onClick={toggleCartVisibility}>
            <Image src='/cart.png' alt='Cart Image'
                width={19} height={18} quality={100} />
            <span>{cartItems.length}</span>
        </CartAmountContainer>
    )
}

export default CartAmount