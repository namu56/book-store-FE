import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import { ThemeName } from './theme';

interface Props {
    themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
    body{
        padding: 0;
        margin: 0;
        background-color: ${(props) =>
            props.themeName === 'light' ? 'white' : 'black'}
    }
    h1 {
        margin: 0 // 의도하지 않은 레이아웃 깨짐이 보이기 때문에, 제거
    }
    
    * {
        color: ${(props) => (props.themeName === 'light' ? 'black' : 'white')}
    }

    `;
