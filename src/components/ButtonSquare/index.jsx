import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const StyledCard = styled.div`
  width: 300px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #2196f3;
`;

const AddButton = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1.5em;
  border: 1px solid #2196f3;
  border-radius: 4px;
  transition: all 0.5s ease;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  &:hover,
  &:focus {
    background: #bbdefb;
  }
`;

const ButtonSquare = ({ onClick, title }) => (
  <StyledCard>
    <AddButton onClick={onClick}>
      <Icon icon="add" color="#2196f3" size={42} />
      {title}
    </AddButton>
  </StyledCard>
);

export default ButtonSquare;

ButtonSquare.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ButtonSquare.defaultProps = {
  title: 'Add',
};
