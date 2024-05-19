import  { useEffect, useState , useContext } from 'react'
import Card from './card'
import Button from './button'
import RatingSelect from '../RatingSelect'
import FeedbackContext from '../../context/FeedbackContext'



function FeedbackForm() {
     const {addFeedback ,feedbackEdit ,updateFeedback } = useContext(FeedbackContext)
     const [text , setText] = useState ('')
     const [message ,setmessage] = useState ('')
     const [rating , setRating] = useState (10)
     const [btnDisabled, setBtnDisabled] = useState(true)
     
       
      
     
     const handleTextChange = (e) =>{
      setText(e.target.value)
     
     if (text===''){
      setBtnDisabled(true)
      setmessage (null)
      
     }
     else if (text.trim().length <=10 ) {
      setBtnDisabled(true)
      setmessage ('text ne9s')

     }
     else {
      setmessage (null)
      setBtnDisabled(false)
     }
     
     }

 const handleSubmit = (e) => {
          e.preventDefault ()
          if (text.trim(). length > 10){
            const newFeedback = {
              text ,
             rating ,
             
            }
            if (feedbackEdit.edit === true) {
              updateFeedback (feedbackEdit.item.id , newFeedback)
            }
            else {
             addFeedback (newFeedback)
            }
            console.log (newFeedback)
            
            addFeedback(newFeedback)

            setText ('')
          }
        
 } 

  return (
    <card>
     <form onSubmit={handleSubmit}>
          <h2> how would you rate your service with me</h2>
          <RatingSelect select ={ (rating ) => setRating (rating)} />
          <div className='input-group'>
          <input type='text ' placeholder='donner le text ' onChange= {handleTextChange} value = {text} />
          <Button type='submit' version = 'secondary'  >send </Button>


           
           </div>
           <div className='message'> {message}  </div>
     </form>
    </card>
  )
}

export default FeedbackForm