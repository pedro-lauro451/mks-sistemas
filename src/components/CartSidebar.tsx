"use client";

import React, { useState } from 'react'
import styled from 'styled-components'
import { useCart } from './CartContext';
import ProductInCart from './ProductInCart';

const SidebarContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0F52BA; 
    width: 486px; 
    height: 100%;
    z-index: 1;
    display: none;
    @media (max-width: 991px) {
        width: 100%;
        height: 100vh;
    }
`;

const SidebarContent = styled.div`
    & h1 {
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        height: 73px; 
        margin: 0;
        padding-top: 1em;
        padding-left: 1em;
    }

    & button {
        width: 100%;
        height: 97px; 
        background: #000; 
        border: 0;
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px; 
        position: absolute;
        bottom: 0;
    }
`;

const TotalsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1em;

    & h1 {
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        margin: 0;
    }

    & .closeIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        border-radius: 20px;
        width: 38px;
        height: 38px; 
        padding: 0;
        margin-top: 0.9em;
        font-weight: 400;
    }
`;

const FlexContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding-left: auto;
    padding-right: auto;
    overflow-y: scroll;
    max-height: 400px;
`;

const CartSidebar = (props: any) => {
    const { isCartVisible,
        toggleCartVisibility,
        cartItems,
        purchaseTotal } = useCart();

    return (
        <SidebarContainer style={{ display: isCartVisible ? 'initial' : 'none' }}>
            <SidebarContent>
                <TotalsContainer>
                    <h1>Carrinho de Compras</h1>
                    <h1 className="closeIcon" onClick={toggleCartVisibility}>X</h1>
                </TotalsContainer>
                <FlexContainer>
                    {cartItems.map((item) => (
                        <ProductInCart key={item.id} 
                        name={item.name}
                        photo={item.photo}
                        price={item.price} 
                        id={item.id}
                        />
                    ))}
                </FlexContainer>
                <TotalsContainer>
                    <h1>Total</h1>
                    <h1>R${purchaseTotal}</h1>
                </TotalsContainer>
                <button>Finalizar Compra</button>
            </SidebarContent>
        </SidebarContainer>
    )
}

export default CartSidebar