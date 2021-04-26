import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GroupCard from '../../components/GroupCard';
import ButtonSquare from '../../components/ButtonSquare';
import API from '../../services/api';

const StyledPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagPage = () => {
  const [groups, setGroups] = useState([]);
  const [count, setCount] = useState(5);

  useEffect(() => {
    API.get('groups')
      .then((resp) => {
        setGroups(resp.data);
        console.log('TEST', resp.data);
      })
      .catch((err) => console.log('Error fetching data', err));
  }, []);

  const addGroup = () => {
    setCount((prev) => prev + 1);
    setGroups((prevGroup) => [...prevGroup, count]);
  };

  const removeGroup = (removedId) => {
    console.log('removeGroup', removedId);
    const newGroup = groups.filter((group) => group.id !== removedId);
    setGroups(newGroup);
  };

  return (
    <StyledPage>
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} onClose={removeGroup} />
      ))}
      <ButtonSquare onClick={addGroup} title="New group" />
    </StyledPage>
  );
};

export default TagPage;
