import React from 'react'

const NumberInput = ({ label, name, placement, icon, className }) => {
    return (
        <div className={`mb-5 ${className}`}>
        <label className='label' htmlFor={name}>{label}</label>
        <div className='input-container'>
            {icon ? (
                <div className={`px-3 absolute bg-slate-100 h-full text-slate-700 font-bold flex items-center ${placement === 'left' ? 'left-0 rounded-tl rounded-bl' : 'right-0 rounded-tr rounded-br' }`}>
                {icon}
                </div>
            ) : null}
            <input className='my-2 ml-2 mr-2 outline-0 rounded w-full' type="number" name={name} />
        </div>
        </div>
    )
}

export default NumberInput;
