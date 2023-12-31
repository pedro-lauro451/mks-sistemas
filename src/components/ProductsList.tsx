import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/api'
import styled from 'styled-components'
import StoreProduct from './Product'
import { useCart } from './CartContext'

const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3em;
    padding-bottom: 5em;
`;

const ProductsList = () => {

    const { addToCart } = useCart();

    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <ProductsContainer>
                {data.products.map(product => (
                    <StoreProduct key={product.id}
                        name={product.name} 
                        price={product.price}
                        description={product.description}
                        photo={product.photo}
                        addToCart={() => addToCart(product)}/>
                ))}
            </ProductsContainer>
        </>
    )
}

export default ProductsList