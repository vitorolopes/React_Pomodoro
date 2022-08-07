import React from 'react'

const Button = (props) => {
  return (
    <button 
        onClick={props.controlTimer}
    >
          {props.title}
    </button>
  )
}

export default Button