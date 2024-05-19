import Header from "./components/header"
import  Container  from "./index.css"
import { useState } from "react"
import FeedbackData from './components/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import Card from "./components/shared/card"
import FeedbackStats from "./components/shared/FeedbackStats"
import FeedbackForm from "./components/shared/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./components/pages/AboutPage"
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import { FeedbackProvider } from "./context/FeedbackContext"


function App(){
    //const [feedback , setFeedback] = useState(FeedbackData)
    //const deleteFeedback= (id) => {
       // if (window.confirm ('are you sure')) {
         //   setFeedback (feedback.filter ((item) => item.id !==id ))
        //}
       
   
    //const addFeedback = (newFeedback) => {
        //newFeedback.id = uuidv4()
       // setFeedback ([newFeedback , ...feedback ])
       // console.log (newFeedback)
    //}
    
    return(
        <FeedbackProvider>
        <Router>
        
        <Header/>
        <div className='container'>
           <Routes>
           <Route exact path='/' element ={
            <>
            
               <FeedbackForm  />
               <FeedbackStats  />
               <FeedbackList  />
            </>
           }>
           
        
           </Route>
            <Route path='/about' element={<AboutPage/>}> </Route>
            <Route path='/post/:id/:name' element={<Post/>}> </Route>
            </Routes>
            <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App 