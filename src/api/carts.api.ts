import { Cart } from '../models/cart.model';
import { httpClient } from './http';

interface AddCartParams {
    bookId: number;
    quantity: number;
}

export const addCart = async (params: AddCartParams) => {
    const response = await httpClient.post('/cart', params);
    return response.data;
};

export const fetchCart = async () => {
    console.log('httpClient: ', httpClient);
    const response = await httpClient.get<Cart[]>('/cart');
    return response.data;
};

export const deleteCart = async (cartId: number) => {
    const response = await httpClient.delete(`/cart/${cartId}`);
    return response.data;
};
