import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  font-size: 11px;
`;

const TitleSubTitle = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Container>
);

export default TitleSubTitle;

TitleSubTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

TitleSubTitle.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
};
