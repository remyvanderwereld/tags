import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  font-size: 11px;
`;

const GroupTitle = ({ title }) => (
  <Container>
    <StyledTitle>{title}</StyledTitle>
    <SubTitle>Group</SubTitle>
  </Container>
);

export default GroupTitle;

GroupTitle.propTypes = {
  Title: PropTypes.string,
};

GroupTitle.defaultProps = {
  Title: 'Title',
};
