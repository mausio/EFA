import styled from 'styled-components'


export const MainContainer = styled.main`
  position: relative;
  z-index: 100;
  overflow: hidden;

  width: 95vw;
  height: 94vh;
  padding: 3vh 2.5vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1.5fr 14fr 0.5fr;

  filter: saturate(0.95) contrast(0.95);

  background-color: var(--dark-blue);
  box-shadow: inset 0 0 55px rgba(0, 0, 0, 0.41), inset 3.5px 3.5px 2px rgba(0, 0, 0, 0.9), inset -2px -2px 1.5px rgba(0, 0, 0, 0.9);
  border: 1px solid var(--black);
`

export const Content = styled.div`
  border-radius: 5px;
  width: 95vw;
  height: 67vh;
  background-image: radial-gradient(var(--background) 30%, var(--blue) 100%);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.78), inset 2px 2px 15px rgba(0, 0, 0, 0.7), inset 2px 2px 10px rgba(0, 0, 0, 1), inset 4px 4px 2px rgba(0, 0, 0, 0.9), inset -2px -2px 1.5px rgba(0, 0, 0, 0.9), 0 0 60px rgba(0, 0, 0, 0.28);
  border: 1px solid var(--black);

  overflow: scroll;
`

export const Gitter = styled.div`
  position: absolute;
  width: 95vw;
  height: 67vh;

  //TODO: Fix gitter-overlay for content

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 0.08%;
    padding: 0.33px;
    background-color: var(--black);
    filter: blur(0.5px) opacity(0.9);
    box-shadow: 0 0 10px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 1);
  }
`