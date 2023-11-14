import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat&family=Oswald&display=swap');
display: flex;
justify-content: center;
background: #EEE;
position: absolute;
bottom: 0;
width: 100%;

& span {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px; 
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
}
`;

const Footer = () => {
  return (
    <StyledFooter>
        <span>MKS sistemas © Todos os direitos reservados</span>
    </StyledFooter>
  )
}

export default Footer