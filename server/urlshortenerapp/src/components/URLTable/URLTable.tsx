import React from 'react'
import { useDispatch } from 'react-redux'
import { getURLs, setCount, onDelete } from '../../services/ApiServices'

const baseURL = "http://localhost:3000/"
interface Props {
    data: {
        date: string,
        originalURL: string,
        shortenerURL: string,
        count: number,
    }[],
}


const URLTable = ({ data }: Props) => {
    const dispatch = useDispatch();

    const addClick = async (shortenerURL: string) => {
        setCount(shortenerURL);
        getURLs(dispatch);
    }

    return (
        <React.Fragment>
            {data && data.length ?
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th className='short-column'>No.</th>
                            <th>Date</th>
                            <th> Original URL</th>
                            <th>Short URL</th>
                            <th className='short-column'>Clicks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <th className='short-column' scope='row'>{index + 1}</th>
                                    <td>{item?.date}</td>
                                    <td>
                                        <a href={item?.originalURL} onClick={() => addClick(item.shortenerURL)} target="_blank" rel="noreferrer">
                                            {item?.originalURL}
                                        </a>
                                    </td>
                                    <td>
                                        <a href={item?.originalURL} onClick={() => addClick(item.shortenerURL)} target="_blank" rel="noreferrer">
                                            {`${baseURL}${item?.shortenerURL}`}
                                        </a>
                                    </td>
                                    <td className='short-column'>{item?.count || 0}</td>
                                    <td>
                                        <button className='btn btn-delete' onClick={() => onDelete(item?.shortenerURL, dispatch)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                :
                <p className='no-results'>No Results</p>
            }

        </React.Fragment>
    )
}

export default URLTable
