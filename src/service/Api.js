import axios from 'axios';
import config from '../config'



const urlForApiVersion =`${ config[process.env.NODE_ENV].API_BACKEND }/api/version`


export function GetApiVersion(){
    axios.get(urlForApiVersion)
    .then(response => {
        console.log(response)
        return response.data.data.version
    })
    .catch(error => {
        return null
    });
}