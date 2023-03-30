import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    overflow-wrap: break-word;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}

/* Do not break Korean words */
:lang(ko) { 
	word-break: keep-all; 
}

/* Reset by Type selectors */
img {
    max-width: 100%;
    height: auto;
}

/* where 가상 선택자를 통해 필요한 태그에만 필요한 속성을 적용 시키기 */
[class] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
[class]::before,
[class]::after { box-sizing: border-box; }
[class]:where(ol, ul) { list-style: none; }
[class]:where(button, fieldset, iframe, input, select, textarea) { border: 0; }
[class]:where(iframe){overflow: hidden;}
[class]:where(textarea){resize: vertical;}
[class]:where(button, dialog, input, mark, meter, progress) { background-color: transparent; }
[class]:where(table) {
  border: 0;
  border-collapse: collapse;
  border-spacing: 0;
}
[class]:where(button, input, meter, progress, select, textarea) {
  -webkit-appearance: none;
  appearance: none;
}
`;

export default GlobalStyle;
