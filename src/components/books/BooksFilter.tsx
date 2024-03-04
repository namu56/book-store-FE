import styled from 'styled-components';
import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { QUERYSTRING } from '../../constants/querystring';

function BooksFilter() {
    // 상태
    // 1. 카테고리
    // 2. 신간 여부 true, false
    // querystring 이용? 상태 공유? 재사용성?
    const { category } = useCategory();

    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategory = (id: number | null) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (id === null) {
            newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
        } else {
            newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
        }

        setSearchParams(newSearchParams);
    };

    // const currentCategory = searchParams.get('category_id');

    const handleNews = () => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (newSearchParams.get(QUERYSTRING.NEWS)) {
            newSearchParams.delete(QUERYSTRING.NEWS);
        } else {
            newSearchParams.set(QUERYSTRING.NEWS, 'true');
        }

        setSearchParams(newSearchParams);
    };

    return (
        <BooksFilterStyle>
            <div className="category">
                {category.map((item) => (
                    <Button
                        size="medium"
                        scheme={
                            // currentCategory === item.id?.toString()
                            //     ? 'primary'
                            //     : 'normal'
                            item.isActive ? 'primary' : 'normal'
                        }
                        key={item.id}
                        onClick={() => handleCategory(item.id)}
                    >
                        {item.category_name}
                    </Button>
                ))}
            </div>
            <div className="new">
                <Button
                    size="medium"
                    scheme={searchParams.get('news') ? 'primary' : 'normal'}
                    onClick={() => handleNews()}
                >
                    신간
                </Button>
            </div>
        </BooksFilterStyle>
    );
}
const BooksFilterStyle = styled.div`
    display: flex;
    gap: 24px;

    .category {
        display: flex;
        gap: 8px;
    }
`;
export default BooksFilter;
