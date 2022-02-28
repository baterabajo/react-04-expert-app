import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setcategories }) => {

  const [inputValue, setInputValue] = useState('');  //undefine

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    setcategories(c => c.concat(inputValue));
    e.preventDefault();
    //console.log('submit hecho');
  }

  return (
    <div>

<h1>AddCategoria</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="Text"
          value={inputValue}
          onChange={handleChange} />
      </form>
    </div>
  );
}

AddCategory.propTypes = {
 // setcategories: PropTypes.func.isRequired
};
export default AddCategory
