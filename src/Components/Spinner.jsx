import React from 'react' 
import { assets } from '../assets/assets'

const Spinner=()=>
{ 
  return (
    <div>
        <img src={assets.loading} alt="loadinng" />
      </div>
    )
}

export default Spinner