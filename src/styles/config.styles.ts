import styled from 'styled-components'

export const ButtonContainer = styled.div`
  position: relative;
  top: 5px;
  z-index: 1100;
  margin: 10px 0 0 0;

  display: flex;
  flex-direction: row;
  justify-content: end;

  .MuiButtonBase-root {
    padding: 0;
    background-color: transparent;
    margin: 0 0 0 0;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px;
    box-shadow: none;
    backdrop-filter: brightness(1);
    transition: 0.3s;

    &:hover {
      background-color: rgb(255, 255, 255, 0.1);
    }

    &:active {
      backdrop-filter: brightness(3);
      transition: 0.3s;
    }

    .MuiButton-startIcon {
      padding: 0;
      margin: 0;
      color: rgb(var(--text));
      transition: 0.5s ease;

      &:hover {
        color: rgb(var(--primary));
      }
    }

    .MuiButton-endIcon {
      padding: 0;
      margin: 0;
      color: rgb(var(--text));
      transition: 0.5s ease;

      &:hover {
        color: rgb(var(--primary));
      }
    }

    .MuiSvgIcon-root {
      padding: 0;
      margin: 0;
      justify-self: center;
      width: 32px;
      height: 32px;
    }
  }
`

export const ConfigOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  inset: 0;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  border-radius: 0;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-name: ConfigOverlay;
  animation-duration: 400ms;

  &.hidingOverlay {
    opacity: 1;
    backdrop-filter: brightness(0.65) blur(5px);
    animation-name: ConfigOverlayHiding;
    animation-fill-mode: forwards;
    animation-duration: 800ms;
    animation-delay: 400ms;
  }

  @keyframes ConfigOverlay {
    from {
      opacity: 0;
      backdrop-filter: blur(0) brightness(1);
    }
    to {
      opacity: 1;
      backdrop-filter: brightness(0.65) blur(5px);
    }
  }

  @keyframes ConfigOverlayHiding {
    from {
      opacity: 1;
      backdrop-filter: brightness(0.65) blur(5px);
    }
    to {
      opacity: 0;
      backdrop-filter: blur(0) brightness(1);
    }
  }
`

export const ConfigContainer = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  width: 75vw;
  height: 75vh;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: rgba(var(--primary), 0.25) 0 0 40px -5px;
  border-radius: 20px;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: ConfigContainer;
  animation-duration: 400ms;
  animation-delay: 400ms;
  overflow-y: scroll;

  @keyframes ConfigContainer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.hidingOverlay {
    opacity: 1;
    box-shadow: rgba(var(--accent), 0.65) 0 0 40px 0;
    animation-name: ConfigContainerHiding;
    animation-fill-mode: forwards;
    animation-duration: 800ms;
    animation-delay: 0ms;
  }

  @keyframes ConfigContainerHiding {
    from {
      opacity: 1;
      box-shadow: rgba(var(--accent), 0.65) 0 0 40px 0;
    }
    to {
      opacity: 0;
      box-shadow: rgba(var(--accent), 0.65) 0 0 40px 0;
    }
  }
`

export const ConfigOptions = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 15px 12px 15px 12px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1.5fr 1.5fr 1fr;
  grid-template-areas:
    'WindowTitle WindowTitle QuitWindow'
    'OriginSearch StartStaion PtMode'
    'EndSearchBox EndStation PtMode'
    'StopSearchBox StopStation Empty'
    'TimeSlider TimeSlider TimeSlider';
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: Configs;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-delay: 550ms;

  &.hidingConfig {
    opacity: 1;
    animation-name: ConfigsHiding;
    animation-fill-mode: forwards;
    animation-duration: 400ms;
    animation-delay: 0ms;
  }

  @keyframes Configs {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes ConfigsHiding {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`


export const WindowTitle = styled.span`
  grid-area: WindowTitle;
  color: var(--text);
  padding: 10px 0 0 10px;
  font-size: 1.5rem;
  font-weight: 900;
  height: 70px;
`
export const QuitWindow = styled.div`
  grid-area: QuitWindow;
  display: flex;
  justify-content: end;

  background-color: rgba(var(--primary), 0.2);

  .MuiButtonBase-root {
    background-color: transparent;
    width: 30px;
    height: 40px;
    border: none;
    border-radius: 5px;
    box-shadow: none;
    backdrop-filter: brightness(1);
    transition: 0.3s;

    &:hover {
      background-color: transparent;
    }

    &:active {
      backdrop-filter: brightness(3);
      transition: 0.3s;
    }

    .MuiButton-startIcon {
      padding: 0;
      margin: 0;

      .MuiSvgIcon-root {
        position: relative;
        top: 5px;
        left: 5px;

        width: 30px;
        height: 30px;
      }
    }

    .MuiButton-endIcon {
      padding: 0;
      margin: 0;
    }
  }
`
export const OriginSearch = styled.div`
  grid-area: OriginSearch;
  margin: 20px 0 0 20px;
  height: 120px;
`

export const DestinationSearch = styled.div`
  grid-area: EndSearchBox;
  margin: 20px 0 0 20px;
  height: 120px;
`

export const OriginStation = styled.div`
  grid-area: StartStaion;
  color: var(--grey);
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-self: start;
  margin: 20px 0 0 15px;

  span {
    margin: 3px 0;
  }
`

export const DestinationStation = styled.span`
  grid-area: EndStation;
  color: var(--grey);
  display: flex;
  font-style: italic;
  flex-direction: column;
  align-self: start;
  margin: 20px 0 0 15px;

  span {
    margin: 3px 0;
  }

`

export const PtModeOptionsSection = styled.div`
  grid-area: PtMode;
  justify-self: start;
  align-self: start;

  .MuiFormControl-root {
    margin: 10px 0 0 0;

    .MuiFormLabel-root {
      color: var(--text);
    }

    .MuiFormGroup-root {
      .MuiFormControlLabel-root {
        margin: 25px 0 10px 0;
        color: var(--white);

        .MuiSwitch-root {
          color: rgb(var(--tertiary));

          .MuiSwitch-switchBase {
            color: var(--blue);
            filter: brightness(1.5);
          }

          .MuiSwitch-track {
            background-color: var(--white);
          }
        }
      }
    }
  }
`
