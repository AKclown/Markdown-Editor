/**
 * 样式采用Atom One Dark Theme样式包
 *
 */
import styled from '@emotion/styled';

// *********************
// 基础标签样式
// *********************
export const BasicStyleWrap = styled.div`
  flex: 1;
  overflow-y: auto;
  background: var(--d42-markdown__md--bg);

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI',
    system-ui, 'Ubuntu', 'Droid Sans', sans-serif;
  font-size: 14px;
  padding: 0 26px;
  line-height: 1.6;
  word-wrap: break-word;
  color: var(--d42-markdown__md--color);
  padding-top: 1em;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: rgba(78, 86, 102, 0.5);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  /* Reset margin top for elements */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin-top: 0;
    color: var(--d42-markdown__md--color);
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin-bottom: 0.2em;
  }

  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-bottom: 0;
  }

  img {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: -1px;
  }

  p {
    margin-bottom: 0.7em;
  }

  ul,
  ol {
    margin-bottom: 0.7em;
    padding: revert;
  }

  ol,
  ul,
  menu {
    list-style: auto;
  }

  hr {
    border: 0;
    height: 2px;
    border-bottom: 2px solid;
  }

  h1 {
    padding-bottom: 0.3em;
    line-height: 1.2;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-weight: normal;
  }

  table {
    border-collapse: collapse;
    margin-bottom: 0.7em;
  }

  th {
    text-align: left;
    border-bottom: 1px solid;
  }

  th,
  td {
    padding: 5px 10px;
  }

  table > tbody > tr + tr > td {
    border-top: 1px solid;
  }

  blockquote {
    margin: 0 7px 0 5px;
    padding: 0 16px 0 10px;
    border-left-width: 5px;
    border-left-style: solid;
  }

  th {
    border-color: rgba(255, 255, 255, 0.69);
  }

  h1,
  hr,
  td {
    border-color: rgba(255, 255, 255, 0.18);
  }

  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }

  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
  }
  h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
  }
  h6 {
    display: block;
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
  }

  code {
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1em;
    line-height: 1.357em;
    color: #d7ba7d;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;

// *********************
// 数学公式样式样式
// *********************
export const MathStyleWrap = styled.div`
  .katex {
    text-rendering: auto;
    font: normal 1.21em KaTeX_Main, Times New Roman, serif;
    line-height: 1.2;
    text-indent: 0;
  }

  .katex * {
    -ms-high-contrast-adjust: none !important;
    border-color: currentColor;
  }

  .katex .katex-version:after {
    content: '0.13.24';
  }

  .katex .katex-mathml {
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .katex .katex-html > .newline {
    display: block;
  }

  .katex .base {
    position: relative;
    white-space: nowrap;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
  }

  .katex .base,
  .katex .strut {
    display: inline-block;
  }

  .katex .textbf {
    font-weight: 700;
  }

  .katex .textit {
    font-style: italic;
  }

  .katex .textrm {
    font-family: KaTeX_Main;
  }

  .katex .textsf {
    font-family: KaTeX_SansSerif;
  }

  .katex .texttt {
    font-family: KaTeX_Typewriter;
  }

  .katex .mathnormal {
    font-family: KaTeX_Math;
    font-style: italic;
  }

  .katex .mathit {
    font-family: KaTeX_Main;
    font-style: italic;
  }

  .katex .mathrm {
    font-style: normal;
  }

  .katex .mathbf {
    font-family: KaTeX_Main;
    font-weight: 700;
  }

  .katex .boldsymbol {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
  }

  .katex .amsrm,
  .katex .mathbb,
  .katex .textbb {
    font-family: KaTeX_AMS;
  }

  .katex .mathcal {
    font-family: KaTeX_Caligraphic;
  }

  .katex .mathfrak,
  .katex .textfrak {
    font-family: KaTeX_Fraktur;
  }

  .katex .mathtt {
    font-family: KaTeX_Typewriter;
  }

  .katex .mathscr,
  .katex .textscr {
    font-family: KaTeX_Script;
  }

  .katex .mathsf,
  .katex .textsf {
    font-family: KaTeX_SansSerif;
  }

  .katex .mathboldsf,
  .katex .textboldsf {
    font-family: KaTeX_SansSerif;
    font-weight: 700;
  }

  .katex .mathitsf,
  .katex .textitsf {
    font-family: KaTeX_SansSerif;
    font-style: italic;
  }

  .katex .mainrm {
    font-family: KaTeX_Main;
    font-style: normal;
  }

  .katex .vlist-t {
    border-collapse: collapse;
    display: inline-table;
    table-layout: fixed;
  }

  .katex .vlist-r {
    display: table-row;
  }

  .katex .vlist {
    display: table-cell;
    position: relative;
    vertical-align: bottom;
  }

  .katex .vlist > span {
    display: block;
    height: 0;
    position: relative;
  }

  .katex .vlist > span > span {
    display: inline-block;
  }

  .katex .vlist > span > .pstrut {
    overflow: hidden;
    width: 0;
  }

  .katex .vlist-t2 {
    margin-right: -2px;
  }

  .katex .vlist-s {
    display: table-cell;
    font-size: 1px;
    min-width: 2px;
    vertical-align: bottom;
    width: 2px;
  }

  .katex .vbox {
    align-items: baseline;
    display: inline-flex;
    flex-direction: column;
  }

  .katex .hbox {
    width: 100%;
  }

  .katex .hbox,
  .katex .thinbox {
    display: inline-flex;
    flex-direction: row;
  }

  .katex .thinbox {
    max-width: 0;
    width: 0;
  }

  .katex .msupsub {
    text-align: left;
  }

  .katex .mfrac > span > span {
    text-align: center;
  }

  .katex .mfrac .frac-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
  }

  .katex .hdashline,
  .katex .hline,
  .katex .mfrac .frac-line,
  .katex .overline .overline-line,
  .katex .rule,
  .katex .underline .underline-line {
    min-height: 1px;
  }

  .katex .mspace {
    display: inline-block;
  }

  .katex .clap,
  .katex .llap,
  .katex .rlap {
    position: relative;
    width: 0;
  }

  .katex .clap > .inner,
  .katex .llap > .inner,
  .katex .rlap > .inner {
    position: absolute;
  }

  .katex .clap > .fix,
  .katex .llap > .fix,
  .katex .rlap > .fix {
    display: inline-block;
  }

  .katex .llap > .inner {
    right: 0;
  }

  .katex .clap > .inner,
  .katex .rlap > .inner {
    left: 0;
  }

  .katex .clap > .inner > span {
    margin-left: -50%;
    margin-right: 50%;
  }

  .katex .rule {
    border: 0 solid;
    display: inline-block;
    position: relative;
  }

  .katex .hline,
  .katex .overline .overline-line,
  .katex .underline .underline-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
  }

  .katex .hdashline {
    border-bottom-style: dashed;
    display: inline-block;
    width: 100%;
  }

  .katex .sqrt > .root {
    margin-left: 0.27777778em;
    margin-right: -0.55555556em;
  }

  .katex .fontsize-ensurer.reset-size1.size1,
  .katex .sizing.reset-size1.size1 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size1.size2,
  .katex .sizing.reset-size1.size2 {
    font-size: 1.2em;
  }

  .katex .fontsize-ensurer.reset-size1.size3,
  .katex .sizing.reset-size1.size3 {
    font-size: 1.4em;
  }

  .katex .fontsize-ensurer.reset-size1.size4,
  .katex .sizing.reset-size1.size4 {
    font-size: 1.6em;
  }

  .katex .fontsize-ensurer.reset-size1.size5,
  .katex .sizing.reset-size1.size5 {
    font-size: 1.8em;
  }

  .katex .fontsize-ensurer.reset-size1.size6,
  .katex .sizing.reset-size1.size6 {
    font-size: 2em;
  }

  .katex .fontsize-ensurer.reset-size1.size7,
  .katex .sizing.reset-size1.size7 {
    font-size: 2.4em;
  }

  .katex .fontsize-ensurer.reset-size1.size8,
  .katex .sizing.reset-size1.size8 {
    font-size: 2.88em;
  }

  .katex .fontsize-ensurer.reset-size1.size9,
  .katex .sizing.reset-size1.size9 {
    font-size: 3.456em;
  }

  .katex .fontsize-ensurer.reset-size1.size10,
  .katex .sizing.reset-size1.size10 {
    font-size: 4.148em;
  }

  .katex .fontsize-ensurer.reset-size1.size11,
  .katex .sizing.reset-size1.size11 {
    font-size: 4.976em;
  }

  .katex .fontsize-ensurer.reset-size2.size1,
  .katex .sizing.reset-size2.size1 {
    font-size: 0.83333333em;
  }

  .katex .fontsize-ensurer.reset-size2.size2,
  .katex .sizing.reset-size2.size2 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size2.size3,
  .katex .sizing.reset-size2.size3 {
    font-size: 1.16666667em;
  }

  .katex .fontsize-ensurer.reset-size2.size4,
  .katex .sizing.reset-size2.size4 {
    font-size: 1.33333333em;
  }

  .katex .fontsize-ensurer.reset-size2.size5,
  .katex .sizing.reset-size2.size5 {
    font-size: 1.5em;
  }

  .katex .fontsize-ensurer.reset-size2.size6,
  .katex .sizing.reset-size2.size6 {
    font-size: 1.66666667em;
  }

  .katex .fontsize-ensurer.reset-size2.size7,
  .katex .sizing.reset-size2.size7 {
    font-size: 2em;
  }

  .katex .fontsize-ensurer.reset-size2.size8,
  .katex .sizing.reset-size2.size8 {
    font-size: 2.4em;
  }

  .katex .fontsize-ensurer.reset-size2.size9,
  .katex .sizing.reset-size2.size9 {
    font-size: 2.88em;
  }

  .katex .fontsize-ensurer.reset-size2.size10,
  .katex .sizing.reset-size2.size10 {
    font-size: 3.45666667em;
  }

  .katex .fontsize-ensurer.reset-size2.size11,
  .katex .sizing.reset-size2.size11 {
    font-size: 4.14666667em;
  }

  .katex .fontsize-ensurer.reset-size3.size1,
  .katex .sizing.reset-size3.size1 {
    font-size: 0.71428571em;
  }

  .katex .fontsize-ensurer.reset-size3.size2,
  .katex .sizing.reset-size3.size2 {
    font-size: 0.85714286em;
  }

  .katex .fontsize-ensurer.reset-size3.size3,
  .katex .sizing.reset-size3.size3 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size3.size4,
  .katex .sizing.reset-size3.size4 {
    font-size: 1.14285714em;
  }

  .katex .fontsize-ensurer.reset-size3.size5,
  .katex .sizing.reset-size3.size5 {
    font-size: 1.28571429em;
  }

  .katex .fontsize-ensurer.reset-size3.size6,
  .katex .sizing.reset-size3.size6 {
    font-size: 1.42857143em;
  }

  .katex .fontsize-ensurer.reset-size3.size7,
  .katex .sizing.reset-size3.size7 {
    font-size: 1.71428571em;
  }

  .katex .fontsize-ensurer.reset-size3.size8,
  .katex .sizing.reset-size3.size8 {
    font-size: 2.05714286em;
  }

  .katex .fontsize-ensurer.reset-size3.size9,
  .katex .sizing.reset-size3.size9 {
    font-size: 2.46857143em;
  }

  .katex .fontsize-ensurer.reset-size3.size10,
  .katex .sizing.reset-size3.size10 {
    font-size: 2.96285714em;
  }

  .katex .fontsize-ensurer.reset-size3.size11,
  .katex .sizing.reset-size3.size11 {
    font-size: 3.55428571em;
  }

  .katex .fontsize-ensurer.reset-size4.size1,
  .katex .sizing.reset-size4.size1 {
    font-size: 0.625em;
  }

  .katex .fontsize-ensurer.reset-size4.size2,
  .katex .sizing.reset-size4.size2 {
    font-size: 0.75em;
  }

  .katex .fontsize-ensurer.reset-size4.size3,
  .katex .sizing.reset-size4.size3 {
    font-size: 0.875em;
  }

  .katex .fontsize-ensurer.reset-size4.size4,
  .katex .sizing.reset-size4.size4 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size4.size5,
  .katex .sizing.reset-size4.size5 {
    font-size: 1.125em;
  }

  .katex .fontsize-ensurer.reset-size4.size6,
  .katex .sizing.reset-size4.size6 {
    font-size: 1.25em;
  }

  .katex .fontsize-ensurer.reset-size4.size7,
  .katex .sizing.reset-size4.size7 {
    font-size: 1.5em;
  }

  .katex .fontsize-ensurer.reset-size4.size8,
  .katex .sizing.reset-size4.size8 {
    font-size: 1.8em;
  }

  .katex .fontsize-ensurer.reset-size4.size9,
  .katex .sizing.reset-size4.size9 {
    font-size: 2.16em;
  }

  .katex .fontsize-ensurer.reset-size4.size10,
  .katex .sizing.reset-size4.size10 {
    font-size: 2.5925em;
  }

  .katex .fontsize-ensurer.reset-size4.size11,
  .katex .sizing.reset-size4.size11 {
    font-size: 3.11em;
  }

  .katex .fontsize-ensurer.reset-size5.size1,
  .katex .sizing.reset-size5.size1 {
    font-size: 0.55555556em;
  }

  .katex .fontsize-ensurer.reset-size5.size2,
  .katex .sizing.reset-size5.size2 {
    font-size: 0.66666667em;
  }

  .katex .fontsize-ensurer.reset-size5.size3,
  .katex .sizing.reset-size5.size3 {
    font-size: 0.77777778em;
  }

  .katex .fontsize-ensurer.reset-size5.size4,
  .katex .sizing.reset-size5.size4 {
    font-size: 0.88888889em;
  }

  .katex .fontsize-ensurer.reset-size5.size5,
  .katex .sizing.reset-size5.size5 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size5.size6,
  .katex .sizing.reset-size5.size6 {
    font-size: 1.11111111em;
  }

  .katex .fontsize-ensurer.reset-size5.size7,
  .katex .sizing.reset-size5.size7 {
    font-size: 1.33333333em;
  }

  .katex .fontsize-ensurer.reset-size5.size8,
  .katex .sizing.reset-size5.size8 {
    font-size: 1.6em;
  }

  .katex .fontsize-ensurer.reset-size5.size9,
  .katex .sizing.reset-size5.size9 {
    font-size: 1.92em;
  }

  .katex .fontsize-ensurer.reset-size5.size10,
  .katex .sizing.reset-size5.size10 {
    font-size: 2.30444444em;
  }

  .katex .fontsize-ensurer.reset-size5.size11,
  .katex .sizing.reset-size5.size11 {
    font-size: 2.76444444em;
  }

  .katex .fontsize-ensurer.reset-size6.size1,
  .katex .sizing.reset-size6.size1 {
    font-size: 0.5em;
  }

  .katex .fontsize-ensurer.reset-size6.size2,
  .katex .sizing.reset-size6.size2 {
    font-size: 0.6em;
  }

  .katex .fontsize-ensurer.reset-size6.size3,
  .katex .sizing.reset-size6.size3 {
    font-size: 0.7em;
  }

  .katex .fontsize-ensurer.reset-size6.size4,
  .katex .sizing.reset-size6.size4 {
    font-size: 0.8em;
  }

  .katex .fontsize-ensurer.reset-size6.size5,
  .katex .sizing.reset-size6.size5 {
    font-size: 0.9em;
  }

  .katex .fontsize-ensurer.reset-size6.size6,
  .katex .sizing.reset-size6.size6 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size6.size7,
  .katex .sizing.reset-size6.size7 {
    font-size: 1.2em;
  }

  .katex .fontsize-ensurer.reset-size6.size8,
  .katex .sizing.reset-size6.size8 {
    font-size: 1.44em;
  }

  .katex .fontsize-ensurer.reset-size6.size9,
  .katex .sizing.reset-size6.size9 {
    font-size: 1.728em;
  }

  .katex .fontsize-ensurer.reset-size6.size10,
  .katex .sizing.reset-size6.size10 {
    font-size: 2.074em;
  }

  .katex .fontsize-ensurer.reset-size6.size11,
  .katex .sizing.reset-size6.size11 {
    font-size: 2.488em;
  }

  .katex .fontsize-ensurer.reset-size7.size1,
  .katex .sizing.reset-size7.size1 {
    font-size: 0.41666667em;
  }

  .katex .fontsize-ensurer.reset-size7.size2,
  .katex .sizing.reset-size7.size2 {
    font-size: 0.5em;
  }

  .katex .fontsize-ensurer.reset-size7.size3,
  .katex .sizing.reset-size7.size3 {
    font-size: 0.58333333em;
  }

  .katex .fontsize-ensurer.reset-size7.size4,
  .katex .sizing.reset-size7.size4 {
    font-size: 0.66666667em;
  }

  .katex .fontsize-ensurer.reset-size7.size5,
  .katex .sizing.reset-size7.size5 {
    font-size: 0.75em;
  }

  .katex .fontsize-ensurer.reset-size7.size6,
  .katex .sizing.reset-size7.size6 {
    font-size: 0.83333333em;
  }

  .katex .fontsize-ensurer.reset-size7.size7,
  .katex .sizing.reset-size7.size7 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size7.size8,
  .katex .sizing.reset-size7.size8 {
    font-size: 1.2em;
  }

  .katex .fontsize-ensurer.reset-size7.size9,
  .katex .sizing.reset-size7.size9 {
    font-size: 1.44em;
  }

  .katex .fontsize-ensurer.reset-size7.size10,
  .katex .sizing.reset-size7.size10 {
    font-size: 1.72833333em;
  }

  .katex .fontsize-ensurer.reset-size7.size11,
  .katex .sizing.reset-size7.size11 {
    font-size: 2.07333333em;
  }

  .katex .fontsize-ensurer.reset-size8.size1,
  .katex .sizing.reset-size8.size1 {
    font-size: 0.34722222em;
  }

  .katex .fontsize-ensurer.reset-size8.size2,
  .katex .sizing.reset-size8.size2 {
    font-size: 0.41666667em;
  }

  .katex .fontsize-ensurer.reset-size8.size3,
  .katex .sizing.reset-size8.size3 {
    font-size: 0.48611111em;
  }

  .katex .fontsize-ensurer.reset-size8.size4,
  .katex .sizing.reset-size8.size4 {
    font-size: 0.55555556em;
  }

  .katex .fontsize-ensurer.reset-size8.size5,
  .katex .sizing.reset-size8.size5 {
    font-size: 0.625em;
  }

  .katex .fontsize-ensurer.reset-size8.size6,
  .katex .sizing.reset-size8.size6 {
    font-size: 0.69444444em;
  }

  .katex .fontsize-ensurer.reset-size8.size7,
  .katex .sizing.reset-size8.size7 {
    font-size: 0.83333333em;
  }

  .katex .fontsize-ensurer.reset-size8.size8,
  .katex .sizing.reset-size8.size8 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size8.size9,
  .katex .sizing.reset-size8.size9 {
    font-size: 1.2em;
  }

  .katex .fontsize-ensurer.reset-size8.size10,
  .katex .sizing.reset-size8.size10 {
    font-size: 1.44027778em;
  }

  .katex .fontsize-ensurer.reset-size8.size11,
  .katex .sizing.reset-size8.size11 {
    font-size: 1.72777778em;
  }

  .katex .fontsize-ensurer.reset-size9.size1,
  .katex .sizing.reset-size9.size1 {
    font-size: 0.28935185em;
  }

  .katex .fontsize-ensurer.reset-size9.size2,
  .katex .sizing.reset-size9.size2 {
    font-size: 0.34722222em;
  }

  .katex .fontsize-ensurer.reset-size9.size3,
  .katex .sizing.reset-size9.size3 {
    font-size: 0.40509259em;
  }

  .katex .fontsize-ensurer.reset-size9.size4,
  .katex .sizing.reset-size9.size4 {
    font-size: 0.46296296em;
  }

  .katex .fontsize-ensurer.reset-size9.size5,
  .katex .sizing.reset-size9.size5 {
    font-size: 0.52083333em;
  }

  .katex .fontsize-ensurer.reset-size9.size6,
  .katex .sizing.reset-size9.size6 {
    font-size: 0.5787037em;
  }

  .katex .fontsize-ensurer.reset-size9.size7,
  .katex .sizing.reset-size9.size7 {
    font-size: 0.69444444em;
  }

  .katex .fontsize-ensurer.reset-size9.size8,
  .katex .sizing.reset-size9.size8 {
    font-size: 0.83333333em;
  }

  .katex .fontsize-ensurer.reset-size9.size9,
  .katex .sizing.reset-size9.size9 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size9.size10,
  .katex .sizing.reset-size9.size10 {
    font-size: 1.20023148em;
  }

  .katex .fontsize-ensurer.reset-size9.size11,
  .katex .sizing.reset-size9.size11 {
    font-size: 1.43981481em;
  }

  .katex .fontsize-ensurer.reset-size10.size1,
  .katex .sizing.reset-size10.size1 {
    font-size: 0.24108004em;
  }

  .katex .fontsize-ensurer.reset-size10.size2,
  .katex .sizing.reset-size10.size2 {
    font-size: 0.28929605em;
  }

  .katex .fontsize-ensurer.reset-size10.size3,
  .katex .sizing.reset-size10.size3 {
    font-size: 0.33751205em;
  }

  .katex .fontsize-ensurer.reset-size10.size4,
  .katex .sizing.reset-size10.size4 {
    font-size: 0.38572806em;
  }

  .katex .fontsize-ensurer.reset-size10.size5,
  .katex .sizing.reset-size10.size5 {
    font-size: 0.43394407em;
  }

  .katex .fontsize-ensurer.reset-size10.size6,
  .katex .sizing.reset-size10.size6 {
    font-size: 0.48216008em;
  }

  .katex .fontsize-ensurer.reset-size10.size7,
  .katex .sizing.reset-size10.size7 {
    font-size: 0.57859209em;
  }

  .katex .fontsize-ensurer.reset-size10.size8,
  .katex .sizing.reset-size10.size8 {
    font-size: 0.69431051em;
  }

  .katex .fontsize-ensurer.reset-size10.size9,
  .katex .sizing.reset-size10.size9 {
    font-size: 0.83317261em;
  }

  .katex .fontsize-ensurer.reset-size10.size10,
  .katex .sizing.reset-size10.size10 {
    font-size: 1em;
  }

  .katex .fontsize-ensurer.reset-size10.size11,
  .katex .sizing.reset-size10.size11 {
    font-size: 1.19961427em;
  }

  .katex .fontsize-ensurer.reset-size11.size1,
  .katex .sizing.reset-size11.size1 {
    font-size: 0.20096463em;
  }

  .katex .fontsize-ensurer.reset-size11.size2,
  .katex .sizing.reset-size11.size2 {
    font-size: 0.24115756em;
  }

  .katex .fontsize-ensurer.reset-size11.size3,
  .katex .sizing.reset-size11.size3 {
    font-size: 0.28135048em;
  }

  .katex .fontsize-ensurer.reset-size11.size4,
  .katex .sizing.reset-size11.size4 {
    font-size: 0.32154341em;
  }

  .katex .fontsize-ensurer.reset-size11.size5,
  .katex .sizing.reset-size11.size5 {
    font-size: 0.36173633em;
  }

  .katex .fontsize-ensurer.reset-size11.size6,
  .katex .sizing.reset-size11.size6 {
    font-size: 0.40192926em;
  }

  .katex .fontsize-ensurer.reset-size11.size7,
  .katex .sizing.reset-size11.size7 {
    font-size: 0.48231511em;
  }

  .katex .fontsize-ensurer.reset-size11.size8,
  .katex .sizing.reset-size11.size8 {
    font-size: 0.57877814em;
  }

  .katex .fontsize-ensurer.reset-size11.size9,
  .katex .sizing.reset-size11.size9 {
    font-size: 0.69453376em;
  }

  .katex .fontsize-ensurer.reset-size11.size10,
  .katex .sizing.reset-size11.size10 {
    font-size: 0.83360129em;
  }

  .katex .fontsize-ensurer.reset-size11.size11,
  .katex .sizing.reset-size11.size11 {
    font-size: 1em;
  }

  .katex .delimsizing.size1 {
    font-family: KaTeX_Size1;
  }

  .katex .delimsizing.size2 {
    font-family: KaTeX_Size2;
  }

  .katex .delimsizing.size3 {
    font-family: KaTeX_Size3;
  }

  .katex .delimsizing.size4 {
    font-family: KaTeX_Size4;
  }

  .katex .delimsizing.mult .delim-size1 > span {
    font-family: KaTeX_Size1;
  }

  .katex .delimsizing.mult .delim-size4 > span {
    font-family: KaTeX_Size4;
  }

  .katex .nulldelimiter {
    display: inline-block;
    width: 0.12em;
  }

  .katex .delimcenter,
  .katex .op-symbol {
    position: relative;
  }

  .katex .op-symbol.small-op {
    font-family: KaTeX_Size1;
  }

  .katex .op-symbol.large-op {
    font-family: KaTeX_Size2;
  }

  .katex .accent > .vlist-t,
  .katex .op-limits > .vlist-t {
    text-align: center;
  }

  .katex .accent .accent-body {
    position: relative;
  }

  .katex .accent .accent-body:not(.accent-full) {
    width: 0;
  }

  .katex .overlay {
    display: block;
  }

  .katex .mtable .vertical-separator {
    display: inline-block;
    min-width: 1px;
  }

  .katex .mtable .arraycolsep {
    display: inline-block;
  }

  .katex .mtable .col-align-c > .vlist-t {
    text-align: center;
  }

  .katex .mtable .col-align-l > .vlist-t {
    text-align: left;
  }

  .katex .mtable .col-align-r > .vlist-t {
    text-align: right;
  }

  .katex .svg-align {
    text-align: left;
  }

  .katex svg {
    fill: currentColor;
    stroke: currentColor;
    fill-rule: nonzero;
    fill-opacity: 1;
    stroke-width: 1;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;

    stroke-dashoffset: 0;
    stroke-opacity: 1;
    display: block;
    height: inherit;
    position: absolute;
    width: 100%;
  }

  .katex svg path {
    stroke: none;
  }

  .katex img {
    border-style: none;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
  }

  .katex .stretchy {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .katex .stretchy:after,
  .katex .stretchy:before {
    content: '';
  }

  .katex .hide-tail {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .katex .halfarrow-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 50.2%;
  }

  .katex .halfarrow-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 50.2%;
  }

  .katex .brace-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 25.1%;
  }

  .katex .brace-center {
    left: 25%;
    overflow: hidden;
    position: absolute;
    width: 50%;
  }

  .katex .brace-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 25.1%;
  }

  .katex .x-arrow-pad {
    padding: 0 0.5em;
  }

  .katex .cd-arrow-pad {
    padding: 0 0.55556em 0 0.27778em;
  }

  .katex .mover,
  .katex .munder,
  .katex .x-arrow {
    text-align: center;
  }

  .katex .boxpad {
    padding: 0 0.3em;
  }

  .katex .fbox,
  .katex .fcolorbox {
    border: 0.04em solid;
    box-sizing: border-box;
  }

  .katex .cancel-pad {
    padding: 0 0.2em;
  }

  .katex .cancel-lap {
    margin-left: -0.2em;
    margin-right: -0.2em;
  }

  .katex .sout {
    border-bottom-style: solid;
    border-bottom-width: 0.08em;
  }

  .katex .angl {
    border-right: 0.049em solid;
    border-top: 0.049em solid;
    box-sizing: border-box;
    margin-right: 0.03889em;
  }

  .katex .anglpad {
    padding: 0 0.03889em;
  }

  .katex .eqn-num:before {
    content: '(' counter(katexEqnNo) ')';
    counter-increment: katexEqnNo;
  }

  .katex .mml-eqn-num:before {
    content: '(' counter(mmlEqnNo) ')';
    counter-increment: mmlEqnNo;
  }

  .katex .mtr-glue {
    width: 50%;
  }

  .katex .cd-vert-arrow {
    display: inline-block;
    position: relative;
  }

  .katex .cd-label-left {
    display: inline-block;
    position: absolute;
    right: calc(50% + 0.3em);
    text-align: left;
  }

  .katex .cd-label-right {
    display: inline-block;
    left: calc(50% + 0.3em);
    position: absolute;
    text-align: right;
  }

  .katex-display {
    display: block;
    margin: 1em 0;
    text-align: center;
  }

  .katex-display > .katex {
    display: block;
    text-align: center;
    white-space: nowrap;
  }

  .katex-display > .katex > .katex-html {
    display: block;
    position: relative;
  }

  .katex-display > .katex > .katex-html > .tag {
    position: absolute;
    right: 0;
  }

  .katex-display.leqno > .katex > .katex-html > .tag {
    left: 0;
    right: auto;
  }

  .katex-display.fleqn > .katex {
    padding-left: 2em;
    text-align: left;
  }

  body {
    counter-reset: katexEqnNo mmlEqnNo;
  }
`;

// *********************
// 代码样式样式样式
// *********************
export const CodeStyleWrap = styled.div`
  .hljs {
    background: var(--d42-markdown__md-hljs--bg);
    color: var(--d42-markdown__md-hljs--color);
  }

  .hljs {
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background: rgba(78, 86, 102, 0.5);
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }

  .hljs-keyword,
  .hljs-literal,
  .hljs-symbol,
  .hljs-name {
    color: #569cd6;
  }
  .hljs-link {
    color: #569cd6;
    text-decoration: underline;
  }

  .hljs-built_in,
  .hljs-type {
    color: #4ec9b0;
  }

  .hljs-number,
  .hljs-class {
    color: #b8d7a3;
  }

  .hljs-string,
  .hljs-meta-string {
    color: #d69d85;
  }

  .hljs-regexp,
  .hljs-template-tag {
    color: #9a5334;
  }

  .hljs-subst,
  .hljs-function,
  .hljs-title,
  .hljs-params,
  .hljs-formula {
    color: var(--d42-markdown__md-hljs-title--color);
  }

  .hljs-comment,
  .hljs-quote {
    color: #57a64a;
    font-style: italic;
  }

  .hljs-doctag {
    color: #608b4e;
  }

  .hljs-meta,
  .hljs-meta-keyword,
  .hljs-tag {
    color: #9b9b9b;
  }

  .hljs-variable,
  .hljs-template-variable {
    color: #bd63c5;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-builtin-name {
    color: #9cdcfe;
  }

  .hljs-section {
    color: gold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  /*.hljs-code {
	font-family:'Monospace';
}*/

  .hljs-bullet,
  .hljs-selector-tag,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #d7ba7d;
  }

  .hljs-addition {
    background-color: rgba(155, 185, 85, 0.2);
    color: rgb(155, 185, 85);
    display: inline-block;
    width: 100%;
  }

  .hljs-deletion {
    background: rgba(255, 0, 0, 0.2);
    color: rgb(255, 0, 0);
    display: inline-block;
    width: 100%;
  }
`;
