import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { customReset } from './customReset';

const GlobalStyle = createGlobalStyle`
${reset};
${customReset};
`;

export default GlobalStyle;
