import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonInput from '../../components/ButtonInput'
import Tag from '../../components/Tag'
import Icon from '../../components/Icon'
import TitleSubtitle from '../../components/TitleSubtitle'
import API from '../../services/api'

const StyledCard = styled.div`
  width: 300px;
  min-height: 300px;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const CardHeader = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
`

const CloseButton = styled.button`
  height: 18px;
  background-color: transparent;
  border: 0;
  padding: 0px;
`

const StyledGroup = styled.div`
  height: 100%;
  flex-wrap: wrap;
  padding: 16px;
`

const CardFooter = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 16px;
`

const GroupCard = ({ group, onClose }) => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    API.get(`groups/${group.id}/tags`)
      .then((resp) => {
        setTags(resp.data)
      })
      .catch((err) => console.log('Error fetching groups', err))
  }, [group.id])

  const addTag = (name) => {
    API.post(`groups/${group.id}/tags`, { name })
      .then((resp) => {
        setTags((prevTags) => [...prevTags, resp.data])
      })
      .catch((err) => console.log('Error creating new group', err))
  }

  const deleteTag = (id) => {
    API.delete(`groups/${group.id}/tags/${id}`)
      .then((resp) => {
        const newTags = tags.filter((tag) => tag.id !== resp.data.id)
        setTags(newTags)
      })
      .catch((err) => console.log('Error deleting group', err))
  }

  return (
    <StyledCard>
      <CardHeader>
        <TitleSubtitle title={group.name} subtitle="Group" />
        <CloseButton onClick={() => onClose(group.id)}>
          <Icon icon="close" color="black" size={16} />
        </CloseButton>
      </CardHeader>
      <StyledGroup>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} onClose={deleteTag} />
        ))}
      </StyledGroup>
      <CardFooter>
        <ButtonInput onSubmit={addTag} title="Add tag" />
      </CardFooter>
    </StyledCard>
  )
}

export default GroupCard

GroupCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}
