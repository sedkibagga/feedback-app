import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
function FeedbackList() {
    const {feedback} = useContext (FeedbackContext)
    if (!feedback || feedback.length ===0){
        return <p> pas trouvé </p>
    }
    
  return (
    <>
    <div className='feedback-list'>
      
      {feedback.map ((item) =>(
        

        <FeedbackItem key={item.id} item={item} />
        
      ))}
     



    </div>
    
    </>
  )
}
//FeedbackList.propTypes ={
    feedback : PropTypes.arrayOf (
        PropTypes .shape ({
            id:PropTypes.number.isRequired,
        })
    )


export default FeedbackList