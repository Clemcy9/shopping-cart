import { createGlobalStyle } from "styled-components";

import Kumbh from "../resources/font/static/Kumbhsans-Medium.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'Kumbh';
    src: url(${Kumbh});
}
`;
