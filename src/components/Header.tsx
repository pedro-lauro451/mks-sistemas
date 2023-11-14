import React from 'react'
import styled from 'styled-components';
import CartAmount from './CartAmount';

const StyledHeader = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat&family=Oswald&display=swap');
  display: flex;
  background: #0F52BA; 
  line-height: 19px;
  color: #FFF;
  font-style: normal;
  font-family: 'Montserrat', sans-serif;

  & h1 {
    font-size: 40px;
    font-weight: 600;
    margin-left: 40px;
  }

  & p {
    font-size: 20px;
    font-weight: 100;
    margin-top: auto;
    margin-left: 5px;
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>MKS</h1>
            <p>Sistemas</p>
            <CartAmount />
        </StyledHeader>
    )
}

export default Header