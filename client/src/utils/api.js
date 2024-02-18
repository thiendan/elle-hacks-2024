import axios from "axios";


const params = (api_key) => {
    return {
        headers: {
            "Authorization": "bearer " + api_key,
            "Content-Type": "application/json" 
        }
    }
};

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

// EOF