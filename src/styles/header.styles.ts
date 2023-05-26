import { DescriptionBar } from './description.styles'
import styled from 'styled-components'

export const Header = styled(DescriptionBar)`
`

export const HeaderItem = styled.div`
  max-width: 200px;
  padding: 8px 18px;
  color: var(--white);
  font-size: 0.9rem;

  border-radius: 5px;
  background-image: radial-gradient(var(--background) 40%, var(--blue) 100%);
  box-shadow: inset 0 0 55px rgba(0, 0, 0, 0.31), inset 2px 2px 10px rgba(0, 0, 0, 0.4), inset 3.5px 3.5px 2px rgba(0, 0, 0, 0.9), inset -2px -2px 1.5px rgba(0, 0, 0, 0.9), 0 0 60px rgba(0, 0, 0, 0.28);
  border: 1px solid var(--black);

  &:last-child {
    width: 65px;
  }
`