import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const MAX_SIZE = 20;

const StyledTag = styled.div`
  background: #757575;
  color: white;
  font-weight: 600;
  border-radius: 14px;
  border: transparent;
  margin: 0 0.75em 0.75em 0;
  padding: 0.25em 0.75em;
  display: inline-block;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    outline: 0;
    background: #5c5a58;
  }
`;

const CloseIcon = styled.span`
  cursor: pointer;
  margin-left: 4px;
`;

const Tag = ({ name, onClose }) => {
  const isLongTag = name.length > MAX_SIZE;
  return (
    <StyledTag>
      {isLongTag ? `${name.slice(0, MAX_SIZE)}...` : name}
      <CloseIcon onClick={() => onClose(name)}>
        <Icon icon="close" color="white" />
      </CloseIcon>
    </StyledTag>
  );
};

export default Tag;

Tag.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Tag.defaultProps = {
  name: 'No name',
};
