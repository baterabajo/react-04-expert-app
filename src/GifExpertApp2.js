
import React, { useState } from 'react';

import AddCategory from './components/AddCategory'

import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Puch' ,'dos ' ,'tres']);

  const handlecategories = () => {
    //setcategories(c => c.concat('HunterXHunter') );
    //setcategories(c => c.concat(input) );
  }

  return (
    <div>
      < AddCategory setcategories={setcategories} />
      <button onClick={handlecategories}>Agregar Categorias</button>
      <h2>GifExpertApp</h2>
      <hr />       
      <ol>
   {
            categories.map(
              category =>(
                  <GifGrid 
                  key={category}
                  category={category}></GifGrid>
              ))
          }
        </ol>
    </div>
  )
}
//     
export default GifExpertApp