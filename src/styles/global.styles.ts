import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: Helvetica, Arial, sans-serif
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  :root {
    --red: #EC0016;
    --cyan: #309FD1;
    --blue: #1740ca;
    --dark-blue: #0b1947;
    --grey: #e0e4ff;
    --black: #000000;
    --white: #fffffb;

    --text: var(--white);
    --background: #3a6bda;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--text);
  }

  body {
    overflow: hidden;
    background-color: var(--black);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  .MuiAutocomplete-root {
    width: 250px;

    .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
      border-color: var(--white);
    }

    .MuiFormLabel-root {
      color: var(--blue);
      filter: brightness(2);

      &.Mui-focused {
        color: var(--white);
        filter: brightness(1);
      }
    }

    .MuiInputBase-input {
      color: var(--text);
    }
  }


  .MuiAutocomplete-popper {
    .MuiPaper-root {
      background-color: var(--dark-blue);
      color: var(--text);

      .MuiAutocomplete-noOptions {
        color: white;
      }
    }

    .MuiAutocomplete-option {
      border-radius: 20px;

      &:hover {
        backdrop-filter: brightness(2);
      }
    }
  }


  .quitWindow {
    align-self: start;
    justify-self: end;
    margin: 15px 0 0 0;
    padding: 0;
    min-width: 0;
    width: 60px;
    height: 60px;
    border: none;
    position: relative;

    .MuiButton-startIcon {
      width: 40px;
      height: 40px;
      padding: 0;

      .MuiSvgIcon-root {
        width: 40px;
        height: 40px;
        padding: 0;
      }
    }
  }

  .closeWindow {
    align-self: start;
    justify-self: end;
    margin: 0 0 0 0;
    padding: 0;
    min-width: 0;
    width: 60px;
    height: 60px;
    border: none;
    z-index: 20;
    position: relative;
    bottom: 8px;
    background-color: rgba(var(--primary), 0.9);
    box-shadow: rgba(var(--primary), 0.95) 0 -20px 10px 10px,
    rgba(var(--primary), 0.7) 0 10px 15px 10px;

    .MuiButton-startIcon {
      width: 40px;
      height: 40px;
      padding: 0;

      .MuiSvgIcon-root {
        width: 40px;
        height: 40px;
        padding: 0;
      }
    }
  }

  .MuiSlider-root {

    .MuiSlider-rail {
      background-color: rgba(var(--secondary), 0.75);
    }

    .MuiSlider-track {
      border-color: var(--blue);
      background-color: var(--blue);
    }

    .MuiSlider-thumb {
      background-color: rgba(var(--accent), 1);
    }

    .MuiSlider-mark {
      color: rgb(var(--accent));
    }

    .MuiSlider-markLabel {
      color: rgb(var(--text));
    }
  }

  .autocompleteInput {
    .MuiAutocomplete-endAdornment {
      display: none;
    }
  }

  .SnackbarItem-variantWarning {
    color: rgb(var(--primary));
  }

  .lf-player-container {
    position: relative;
    z-index: -1;
  }


`