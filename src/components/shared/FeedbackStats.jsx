import React from 'react'
import FeedbackList from '../FeedbackList'
import { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'



function FeedbackStats() {
  const {feedback} = useContext (FeedbackContext)
    const average = feedback.reduce ( (acc, cur) => { return (acc + cur.rating)     },0) / feedback.length
     console.log ( average )
     
  return (
    <div className='feedback-stats'>
    <h4> {feedback.length} Reviws </h4>
    <h4> {average} rating    </h4>

    </div>
  )
}
//FeedbackStats.propTypes ={
   // Feedback : PropTypes.array.isRequired
//}

export default FeedbackStats