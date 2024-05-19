import PropTypes from 'prop-types'



function Header({text ,bgColor ,textCOlor}){
    const headerStyles ={
        backgroundColor : bgColor ,
        color : textCOlor ,
    }
    return(

        <header style ={headerStyles} >
         
            
           <div className='container'> 
             
              <h2> {text}</h2>   
           </div> 
         

        </header>
        
    )
}

Header.defaultProps ={
    text: 'Feedback UI',
    bgColor: 'black',
    textCOlor : 'white' ,

    
}
Header.propTypes ={
     text: PropTypes.string,
     bgColor: PropTypes.string,
     textCOlor: PropTypes.string,
}
export default Header 