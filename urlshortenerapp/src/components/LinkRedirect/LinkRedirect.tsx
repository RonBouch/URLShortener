import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import { getURL, setCount } from '../../services/ApiServices';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const LinkRedirect = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getURL(`${params.shortURL}`)
            if (data && data.originalURL) {
                setCount(params.shortURL)
                return window.location = data?.originalURL
            }
            setIsLoading(false);
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <div style={{ marginTop: 100 }}>
            {!isLoading ?
                <>
                    <NotFoundPage />
                </>
                :
                <ThreeDots
                    height="20"
                    width="100%"
                    color='grey'
                    ariaLabel='loading'
                />
            }

        </div>
    )
}

export default LinkRedirect
