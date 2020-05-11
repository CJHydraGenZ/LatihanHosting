
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts'
export const API = async () => {
    try {
        const response = await axios.get(`${URL}`)
        // .then(response => response.json())
        // .then(json => console.log(json))
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);

    }
}


export const deleteAPI = async (ID) => {
    try {
        console.log(ID);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + ID, {
            method: 'DELETE'
        })

        return response.data
    } catch (error) {
        console.log(error);

    }
}