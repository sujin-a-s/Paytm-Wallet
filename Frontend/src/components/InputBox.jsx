import React from 'react'

const InputBox = ({inputlabel,placeholder,onChange}) => {
  return (
    <div className='px-3'>
        <h1 className='text-sm font-medium text-left py-2'>{inputlabel}</h1>
        <input onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" placeholder={placeholder}></input>

    </div>
  )
}

export default InputBox