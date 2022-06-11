import React, { useEffect } from 'react'
import './AdminPage.css';
import URLTable from '../../components/URLTable/URLTable';
import { getURLs, onDelete } from '../../services/ApiServices';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AdminPage = () => {
    const dispatch = useDispatch();
    const { urls } = useSelector((state: RootState) => state.urlStore);

    useEffect(() => {
        getURLs(dispatch);
    }, [])

    return (
        <div className='adminPage-container'>
            <URLTable data={urls} onDelete={(url) => onDelete(url, dispatch)} />
        </div>
    )
}
export default AdminPage;
