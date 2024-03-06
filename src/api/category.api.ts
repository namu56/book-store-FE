import { Category } from "../models/category.model";
import { httpClient, requestHandler } from "./http";

export const fetchCategory = async () => {
  return await requestHandler<Category[]>("get", "/category");
};
