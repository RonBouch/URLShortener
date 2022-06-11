import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NewURL.css';
import { toast } from 'react-toastify';
import { LinkResult } from '../../components';
import { addUrl } from '../../services/ApiServices';

const NewURL = () => {
    const [url, setUrl] = useState('')
    const navigate = useNavigate();

    const addURLToServer = async (shortenerURL: string) => {
        const params = {
            "date": new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }),
            "originalURL": shortenerURL,
            "shortenerURL": shortenerURL.slice(0, 10),
        }

        const res = await addUrl(params)
        if (res) {
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault(); //TODO
        if (!url) {
            return toast.warning("Please enter url"); // TODO
        } else {
            addURLToServer(url);
        }
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <h1>
                Short URL Generator
            </h1>

            <form style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: 'center' }}
                onSubmit={handleSubmit}
            >
                <input type='text' id="url" name="url" placeholder="Enter Url ... " onChange={(e) => setUrl(e.target.value)} value={url} />
                <input type='submit' value='Create a Link' />
            </form>

            <LinkResult inputValue={url} />

        </div>
    )
}

export default NewURL;
