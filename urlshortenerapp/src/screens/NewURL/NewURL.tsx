import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NewURL.css';
import { toast } from 'react-toastify';
import { addUrl } from '../../services/ApiServices';
import { Circles } from 'react-loader-spinner'

const NewURL = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState('')
    const navigate = useNavigate();

    const addURLToServer = async () => {
        const params = {
            "date": new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }),
            "originalURL": url,
            "shortenerURL": `${require("shortid").generate()}`,
            "count": 0,
        }

        const res = await addUrl(params)
        if (res) {
            setTimeout(() => {
                navigate('/admin');
                setIsLoading(false);
            }, 1000);
        }
    }


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!url) {
            return toast.warning("Please enter url");
        } else {
            setIsLoading(true)
            addURLToServer();
        }
    }

    return (
        <div className='page-container'>
            <h1>Short URL Generator</h1>

            <form className='form-container' onSubmit={handleSubmit}>
                <input type='text' id="url" name="url" placeholder="Enter Url ... " onChange={(e) => setUrl(e.target.value)} value={url} />
                <input type='submit' value='Create a Link' />
            </form>

            {isLoading && <Circles
                height="50"
                width="100%"
                color='grey'
                ariaLabel='loading'
            />}

        </div>
    )
}

export default NewURL;
