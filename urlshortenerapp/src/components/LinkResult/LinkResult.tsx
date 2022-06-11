import React, { useEffect, useState } from 'react'

interface Props {
    inputValue: string;
}

const LinkResult = ({ inputValue }: Props) => {
    const [shortenLink, setShortenLink] = useState('null')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

    }, [inputValue])

    const fetchData = async () => {
        try {

        } catch (err) {
            console.log("🚀 ~ file: LinkResult.tsx ~ line 14 ~ fetchData ~ err", err)
        }
    }

    return (
        <div className="result">
            <p>{inputValue}</p>
            <button> Copy to clipboard</button>
        </div>
    )
}

export default LinkResult
