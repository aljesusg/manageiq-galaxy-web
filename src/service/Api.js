import axios from 'axios';
import config from '../config'



const urlForApiVersion =`${ config[process.env.NODE_ENV].API_BACKEND }/api/version`


export function GetVersion(){
    axios.get(urlForApiVersion)
    .then(response => {
        return response.data.data.version
    })
    .catch(error => {
        console.log(error)
        return nil
    });
}