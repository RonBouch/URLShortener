import React, { useState } from 'react'


interface PropsFunction {
    getLink: (link: string) => void
}

const LinkInput = ({ getLink }: PropsFunction) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div>
            <input type="text" placeholder='Enter url' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => getLink(inputValue)}> shorten </button>
        </div>)
}

export default LinkInput;