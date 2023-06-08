import React, { useState } from 'react'

const Button = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function submitHandler() {
  setIsSubmitted(true);
  }
}
//   return 
//     <>
//       <button onClick={submitHandler}>
//       {  isSubmitted ? 'Loading...' : 'Submit' }
//     </>
// }


export default Button