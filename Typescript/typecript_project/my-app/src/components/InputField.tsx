import React, { useRef } from 'react'
import './style.css'

interface Props {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void

}
const InputField = ({ todo, settodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='input'
         onSubmit={(e)=>{handleAdd(e)
            inputRef.current?.blur();
        }}
        
         >
            <input
                ref={inputRef}
                className='box'
                type="text"
                placeholder='Enter the task'
                value={todo} onChange={(e) => settodo(e.target.value)} />
            <button
                className='submit'
                type='submit'>GO
            </button>
        </form>
    )
}

export default InputField
