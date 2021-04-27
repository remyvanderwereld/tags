import { useEffect, useState } from 'react'
import styled from 'styled-components'
import GroupCard from './GroupCard'
import ButtonSquare from '../../components/ButtonSquare'
import API from '../../services/api'

const StyledPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TagPage = () => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    API.get('groups')
      .then((resp) => {
        setGroups(resp.data)
      })
      .catch((err) => console.log('Error fetching groups', err))
  }, [])

  const addGroup = () => {
    API.post('groups')
      .then((resp) => {
        setGroups((prevGroup) => [...prevGroup, resp.data])
      })
      .catch((err) => console.log('Error creating new group', err))
  }

  const deleteGroup = (id) => {
    API.delete(`groups/${id}`)
      .then((resp) => {
        const newGroup = groups.filter((group) => group.id !== resp.data.id)
        setGroups(newGroup)
      })
      .catch((err) => console.log('Error deleting group', err))
  }

  return (
    <StyledPage id="tag-page">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} onClose={deleteGroup} />
      ))}
      <ButtonSquare onClick={addGroup} title="New group" />
    </StyledPage>
  )
}

export default TagPage
