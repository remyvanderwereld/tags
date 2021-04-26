import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 0.5em 1em;
  outline: 0;
  box-sizing: border-box;
  &:focus {
    border-color: #2196f3;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #2196f3;
  color: white;
  border-radius: 4px;
  border: transparent;
  padding: 0.5em 1em;
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    outline: 0;
    background: #1976d2;
  }
`;

const ButtonInput = ({ onSubmit, title }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [editInputValue, setEditInputValue] = useState('');
  const textInput = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      console.log('textInput useEffect', textInput);
      // Set focus on input field when input is visible.
      textInput.current.focus();
    }
  }, [inputVisible]);

  const handleKeyDown = (event) => {
    // Create tag onEnter, hide and clear input.
    if (event.key === 'Enter') {
      console.log('do validate', editInputValue);
      onSubmit(editInputValue);
      setInputVisible(false);
      setEditInputValue('');
    }
  };

  if (inputVisible) {
    return (
      <Input
        ref={textInput}
        value={editInputValue}
        onChange={(e) => {
          setEditInputValue(e.target.value);
        }}
        placeholder="Enter name..."
        onKeyDown={handleKeyDown}
      />
    );
  }
  return (
    <Button type="submit" onClick={() => setInputVisible(true)}>
      {title}
    </Button>
  );
};

export default ButtonInput;

ButtonInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ButtonInput.defaultProps = {
  title: 'Add',
};
