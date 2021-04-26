import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const MAX_CHAR_SIZE = 20;

const StyledTag = styled.div`
  background: #757575;
  color: white;
  font-size: 12px;
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

const Tag = ({ tag, onClose }) => {
  const { name, id } = tag;
  const isLongTag = name.length > MAX_CHAR_SIZE;
  return (
    <StyledTag>
      {isLongTag ? `${name.slice(0, MAX_CHAR_SIZE)}...` : name}
      <CloseIcon onClick={() => onClose(id)}>
        <Icon icon="close" color="white" size={14} />
      </CloseIcon>
    </StyledTag>
  );
};

export default Tag;

Tag.propTypes = {
  tag: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
