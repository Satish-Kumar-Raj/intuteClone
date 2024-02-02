import React from 'react'

function Button({name,color}) {
  return (
    <div>
    <button className={`border text-sm border-black rounded-full px-4 py-2 ${color} hover:shadow-[3px_3px_2px_0px_rgba(0,0,0,0.9)]`  }>{name}</button>
    </div>
  )
}

export default Button