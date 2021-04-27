import styled from 'styled-components'
import amsterdam from './amsterdam.svg'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: white;
  display: flex;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;
  min-height: 64px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px;

  @media only screen and (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const Logo = styled.img`
  width: 44px;
  height: 44px;
`

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`

const Header = () => (
  <StyledHeader>
    <Logo src={amsterdam} alt="amsterdam" />
    <div>
      <Title>Tags</Title>
      by Remy van der Wereld
    </div>
  </StyledHeader>
)

export default Header
