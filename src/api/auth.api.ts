import { SignupProps } from "../pages/Signup";
import { requestHandler } from "./http";

interface LoginResponse {
  token: string;
}
export const signup = async (userData: SignupProps) => {
  return await requestHandler("post", "/users/join", userData);
};

export const resetRequest = async (data: SignupProps) => {
  return await requestHandler("post", "/users/login", data);
};

export const resetPassword = async (data: SignupProps) => {
  return await requestHandler("put", "/users/reset", data);
};

export const login = async (data: SignupProps) => {
  return await requestHandler<LoginResponse, SignupProps>("post", "/users/login", data);
};
