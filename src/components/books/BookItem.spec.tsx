import React from 'react';
import { render } from '@testing-library/react';
import BooksItem from './BooksItem';
import { BookStoreThemeProvider } from '../../context/themeContext';
import { Book } from '../../models/book.model';
import { formatNumber } from '../../utils/format';

const dummyBook: Book = {
    id: 2,
    category_id: 0,
    title: '신데렐라들',
    img: 10,
    form: '종이책',
    isbn: '1',
    summary: '유리구두',
    detail: '투명한 유리구두',
    author: '김구두',
    pages: 100,
    contents: '목차입니다.',
    price: 20000,
    published_date: '2023-12-05',
    likes: 2,
};

describe('BookItem', () => {
    it('렌더 여부', () => {
        const { getByText, getByAltText } = render(
            <BookStoreThemeProvider>
                <BooksItem book={dummyBook} />
            </BookStoreThemeProvider>
        );

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText('20,000원')).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByAltText(dummyBook.title)).toHaveAttribute(
            'src',
            `https://picsum.photos/id/${dummyBook.img}/600/600`
        );
    });
});
