import styled from 'styled-components';
import Button from '../common/Button';
import { useEffect } from 'react';

interface Props {
    onCompleted: (address: string) => void;
}

const SCRIPT_URL =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

function FindAddressButton({ onCompleted }: Props) {
    // 스크립트 로드

    // 핸들러
    const handleOpen = () => {
        new window.daum.Postcode({
            oncomplete: (data: any) => {
                onCompleted(data.address as string);
            },
        }).open();
    };

    // 입력

    useEffect(() => {
        // <script></script> 생성
        const script = document.createElement('script');
        // <script src='URL'></script>
        script.src = SCRIPT_URL;
        script.async = true;
        // <head>
        //     <script src='URL'></script>
        // </head>
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Button
            type="button"
            size="medium"
            scheme="normal"
            onClick={handleOpen}
        >
            주소 찾기
        </Button>
    );
}

const FindAddressButtonStyle = styled.div``;

export default FindAddressButton;
