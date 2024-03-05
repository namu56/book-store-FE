import { Cart } from "../models/cart.model";
import { httpClient, requestHandler } from "./http";

interface AddCartParams {
  bookId: number;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  return await requestHandler("post", "/cart", params);
};

export const fetchCart = async () => {
  console.log("httpClient: ", httpClient);
  return await requestHandler<undefined, Cart[]>("get", "/cart");
};

export const deleteCart = async (cartId: number) => {
  return await requestHandler("delete", `/cart/${cartId}`);
};
