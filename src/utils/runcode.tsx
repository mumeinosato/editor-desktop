import { Buffer } from 'buffer';
import axios from 'axios';

const api_url = process.env.REACT_APP_BACKEND_URL

interface RunData {
    input: string,
    code: string,
    language: string,
}

export const handleRunClick = (code: string, language: string, input: string): Promise<any>  => {
    const codeData = Buffer.from(code).toString('base64');
    const inputData = Buffer.from(input).toString('base64');

    const data: RunData = {
        input: inputData,
        code: codeData,
        language: language,
    }

    return axios.post(`${api_url}/script/run`, data)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error:', error);
        return false; 
    });
}