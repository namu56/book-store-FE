import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient, requestHandler } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", { params: params });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  return requestHandler<BookDetail>("get", `/books/${bookId}`);
};

export const likeBook = async (bookId: number) => {
  return requestHandler("post", `/likes/${bookId}`);
};

export const unlikeBook = async (bookId: number) => {
  return requestHandler("delete", `/likes/${bookId}`);
};
