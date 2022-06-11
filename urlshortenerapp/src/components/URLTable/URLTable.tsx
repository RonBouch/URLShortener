import React from 'react'

interface Props {
    data: {
        date: string,
        originalURL: string,
        shortenerURL: string,
        count: number,
    }[],
    onDelete: (url: string) => void,
}

const URLTable = ({ data, onDelete }: Props) => {
    return (
        <React.Fragment>
            {data && data.length ?
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Date</th>
                            <th>Original URL</th>
                            <th>Short URL</th>
                            <th>Clicks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item?.date}</td>
                                    <td>{item?.originalURL}</td>
                                    <td>{item?.shortenerURL}</td>
                                    <td>{item?.count || 0}</td>
                                    <td>
                                        <button className='btn btn-delete' onClick={() => onDelete(item?.shortenerURL)} >Delete</button>
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
