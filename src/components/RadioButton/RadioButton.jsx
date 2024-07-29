import React from 'react'


const RadioButton = ({label, name, options}) => {
    return (
        <>
        <label htmlFor={name} className='label'>{label}</label>
        {options?.map(({ name, value, id }) => (
        <div key={value} className='input-container py-3 px-4'>
            <input type='radio' id={id} name={name} value={value} className='w-4 h-4' onChange={() => {}} />
            <label htmlFor={id} className='pl-4 text-xl font-bold text-slate-900'>{name}</label>
        </div>

        ))}
        </>
    )
}

export default RadioButton;