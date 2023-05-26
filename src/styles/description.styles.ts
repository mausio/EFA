import styled from 'styled-components'

export const DescriptionBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 0 5px 0;
  align-self: end;
`

export const Tags = styled.p`
  width: 100px;
  color: var(--grey);
  margin: 0;

  &:last-child {
    width: 100px;
  }
`