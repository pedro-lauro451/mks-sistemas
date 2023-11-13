export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC');
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return data;
}

export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}
