import styled from 'styled-components/macro'

const Spoiler = styled('span')`
  background: black;
  color: black;
  transition: all 0.2s ease-in-out;
  transition-delay: 0s;
  cursor: default;

  &:hover {
    background: transparent;
    color: white;
    transition-delay: 2s;
  }
`

export default Spoiler
