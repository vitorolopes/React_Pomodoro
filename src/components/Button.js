import React from 'react'

const Button = (props) => {
  return (
    <button 
        onClick={props.callback}
        className={props.activeClass}
    >
          {props.title}
    </button>
  )
}

export default Button