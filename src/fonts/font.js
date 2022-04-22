import { createGlobalStyle } from "styled-components";
import RFLEXBLACK from "./R-FLEX-BLACK.woff2";

export const FontStyle = createGlobalStyle`		    
  @font-face {
    font-family: 'R-FLEX-BLACK';	
    src: url(${RFLEXBLACK}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }
`;
