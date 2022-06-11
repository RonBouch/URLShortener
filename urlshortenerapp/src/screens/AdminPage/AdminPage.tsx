import React, { useState, useEffect } from 'react'
import { LinkInput, LinkResult } from '../../components'
import { Link } from 'react-router-dom'
import './AdminPage.css';
import axios from 'axios';


const AdminPage = () => {
    const [data, setData] = useState([]);
    const [getLink, setLink] = useState('')

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const res = await axios.get("http://localhost:5000/getUsers")
        if (res.status == 200) {
            console.log("🚀 ~ file: adminPage.tsx ~ line 19 ~ getUsers ~ res", res)
            setData(res.data);
        }
    }

    return (
        <div>
            <h1>
                Url Shortener
            </h1>

            <div className='inputContainer'>

                <LinkInput getLink={(link) => setLink(link)} />

                <LinkResult inputValue={getLink} />

                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>No.</th>
                            <th style={{ textAlign: 'center' }}>Name</th>
                            <th style={{ textAlign: 'center' }}>Email</th>
                            <th style={{ textAlign: 'center' }}>Contact</th>
                            <th style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.contact}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            <button className='btn btn-edit'>Update</button>
                                        </Link>
                                        <button className='btn btn-delete'>Delete</button>
                                        <Link to={`/update/${item.id}`}>
                                            <button className='btn btn-view'>View</button>
                                        </Link>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default AdminPage;
