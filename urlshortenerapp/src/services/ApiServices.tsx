import axios from "axios";
import { toast } from "react-toastify";
import { setUrls } from "../redux/urlStore";


export const getURLs = async (dispatch: any) => {
    const res = await axios.get("http://localhost:5000/getURLs")
    if (res.status === 200) {
        dispatch(setUrls((res.data)));
    }
}

export const onDelete = async (url: string, dispatch: any) => {
    if (window.confirm("Are you sure you want to delete this URL entry")) {
        const res = await axios.delete(`http://localhost:5000/deleteURL/${url}`);
        if (res.status === 200) {
            toast.success(res.data);
            getURLs(dispatch);
        }
    }
}

export const addUrl = async (params: object) => {
    try {
        const res = await axios.post("http://localhost:5000/addURL", params);
        if (res.status === 200 && res.data.errCode !== -1) {
            toast.success(res.data.msg);
            return true;
        } else {
            toast.info("URL already exists");
        }
    } catch (error) {
        toast.error("ERROR: Please try again later"); // TODO
    }
}