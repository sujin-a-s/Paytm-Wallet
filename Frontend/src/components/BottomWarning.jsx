import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({bottomwarning,buttontext,to}) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>
        {bottomwarning}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttontext}
      </Link>
    </div>
  )
}

export default BottomWarning