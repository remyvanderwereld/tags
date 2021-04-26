import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonInput from '../ButtonInput';
import Tag from '../Tag';
import Icon from '../Icon';
import GroupTitle from './GroupTitle';

const StyledCard = styled.div`
  width: 300px;
  min-height: 300px;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px;
  border-radius: 4px;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const CardHeader = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
`;

const CloseIcon = styled.span`
  cursor: pointer;
  margin-left: 4px;
`;

const StyledGroup = styled.div`
  height: 100%;
  flex-wrap: wrap;
  padding: 16px;
`;

const CardFooter = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 16px;
`;

const GroupCard = ({ group, onClose }) => {
  const [tags, setTags] = useState(['test']);

  const addTag = (tagName) => {
    setTags((prevTagGroup) => [...prevTagGroup, tagName]);
  };

  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  console.log('Title', group);
  return (
    <StyledCard>
      <CardHeader>
        <GroupTitle title={group.name} />
        <CloseIcon onClick={() => onClose(group.id)}>
          <Icon icon="close" color="black" />
        </CloseIcon>
      </CardHeader>
      <StyledGroup>
        {tags.map((tag) => (
          <Tag key={tag} name={tag} onClose={removeTag} />
        ))}
      </StyledGroup>
      <CardFooter>
        <ButtonInput onSubmit={addTag} title="Add tag" />
      </CardFooter>
    </StyledCard>
  );
};

export default GroupCard;

GroupCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

GroupCard.defaultProps = {
  name: '',
};
