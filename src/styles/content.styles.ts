import styled from 'styled-components'

export const ContentDescription = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.47fr 0.95fr 2fr 1fr 0.22fr;

  margin: 0 0 5px 0;
  align-self: end;
`

export const ContentTag = styled.p`
  color: var(--grey);
  margin: 0 5px 5px 5px;
  padding: 0;
  justify-self: start;
`

export const ContentContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  height: 100%;

  margin: 10px 15px 10px 0;

`

export const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 0.16fr 0.5fr 0.95fr 2fr 1fr 0.15fr;
  grid-template-rows: 1fr;

  justify-content: start;

  color: var(--white);

  padding: 0 10px 5px 10px;
  margin: 5px 0 0 0;

  &:nth-child(even) {
    border-bottom: solid var(--black) 8px;
  }

  &:last-child {
    border-bottom: none;
  }
`

export const Time = styled.span`

`

export const Line = styled.span`
  text-align: start;

  padding: 1px 2px;
  margin: 0 3px;

  border-radius: 1px;
  color: var(--blue);
  background-color: var(--white);
`

export const Via = styled.span``

export const Bay = styled.span`
  text-align: center;
`

export const Destination = styled.span`
  text-align: start;

  padding: 1px 2px;
  margin: 0 3px;

  border-radius: 1px;
  color: var(--blue);
  background-color: var(--white);
`

export const Origin = styled.span``