import{FaTimes , FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'
import Card from './shared/card'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
 
function FeedbackItem({item }) {
    const {deleteFeedback} = useContext (FeedbackContext) 
    const {feedbackEdit , editFeedback} = useContext(FeedbackContext)
   
return (
    <Card reverse={true}>
     <div className='num-display'>{item.rating}</div>
     <button onClick={ () => deleteFeedback (item.id)} className='close'> <FaTimes color='purple'/>  </button>
     <button onClick={ () => editFeedback (feedbackEdit ) } className="edit" > <FaEdit color ='purple' /></button>
     <div className='text-display'>
        {item.text} 
     </div>
     


    </Card>
  )
}
FeedbackItem.propTypes ={
    item : PropTypes.object .isRequired
}

export default FeedbackItem