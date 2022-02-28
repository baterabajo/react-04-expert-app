import React , {useState} from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({setCategories} ) => {

  const [inputValue, setinputValue] = useState('')
    
  const handleInputChange =(e)=>{
      setinputValue(e.target.value);
  }   
  const handleSubmit =(e)=>{
        e.preventDefault();
        //console.log('submit hecho');
        if(inputValue.trim().length>2)
        {
          setCategories( cat =>[inputValue,...cat] )  ;
          setinputValue('');
        }
        
  }

  return (

    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        >        
        </input>
    </form>
    
  )
}

AddCategory.prototype={
//  setCategories: PropTypes.func.isRequired
}

