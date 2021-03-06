import {React,useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs'

import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
  //const [count, setCount]=useState(0);
 //const [state, setState] = useState(second)

 const {data:images , loading} = useFetchGifs(category);

  return (    
    <div>
        <h3>{category}</h3>    
        {loading && <p>Loading</p>}

          {
          images.map(img =>(
            <GifGridItem  
            key={img.id}
            {...img}          
             /> 
            ))
          }      
   
 
  </div>
  )


  //<h3>{count}</h3>             
  //<button onClick={()=>setCount(count + 1 )}></button>  

}



