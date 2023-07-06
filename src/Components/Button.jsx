import React, { useState } from 'react'

const Button = () => {

  const [isSubmitted, setIsSubmitted] = useState(true);
  
  function submitHandler() {
  setIsSubmitted(false);
  }

  return (
  <>
    <button onClick={submitHandler} > {isSubmitted ? 'Submit': 'Cancel'} </button>
  </>
  )
}




export default Button;