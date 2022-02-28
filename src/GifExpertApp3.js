import React , {useState} from 'react'
import  AddCategory  from "./components/AddCategory.js";
import { GifGrid } from './components/GifGrid.js';

export const GifExpertApp = props => {

  const [categories, setCategories] = useState(['One Punch']);

 const handleAdd=()=>{
      //setcategories( c => c.concat('HunterXHunter') )

  }
  return (
    <div>GifExpertApp
        <h2>GifExpertApp</h2>
        <hr></hr>
        <AddCategory setCategories= {setCategories} />        
        <ol>
          {
            categories.map(category =>(category
               
              ))
          }
        </ol>

    </div>
  )
}


