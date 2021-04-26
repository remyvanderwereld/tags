import styled from 'styled-components';
import amsterdam from './amsterdam.svg';

const StyledHeader = styled.div`
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 64px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px;
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Header = () => (
  <StyledHeader>
    <Logo src={amsterdam} alt="amsterdam" />
    <div>
      <Title>Tags</Title>
      by Remy van der Wereld
    </div>
  </StyledHeader>
);

export default Header;
