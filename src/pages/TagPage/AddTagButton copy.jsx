import { useEffect, useRef, useState } from 'react';

const AddTagButton = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [editInputValue, setEditInputValue] = useState('');
  const textInput = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      console.log('textInput useEffect', textInput);
      textInput.current.focus();
    }
  }, [inputVisible]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate', editInputValue);
    }
  };

  return (
    <form
      className="c-sbi-filter__form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('FORM values', e.target);
      }}
    >
      {inputVisible && (
        <input
          ref={textInput}
          className="c-sbi-filter__input qa-sbi-filter-form-input"
          value={editInputValue}
          onChange={(e) => {
            setEditInputValue(e.target.value);
          }}
          placeholder="placeholder"
          onKeyDown={handleKeyDown}
        />
      )}
      {!inputVisible && (
        <button
          className="c-sbi-filter__submit qa-sbi-filter-form-sumbit"
          type="submit"
          onClick={() => setInputVisible(true)}
        >
          Add tag
        </button>
      )}
    </form>
  );
};

export default AddTagButton;
