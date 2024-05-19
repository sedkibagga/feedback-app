import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const parms = useParams()
  return (
    <div>
        <h1> Post {parms.id} </h1>
        <h1>Name : {parms.name } </h1>
        
    </div>
  )
}

export default Post