import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const createPhoneBookEntry = (newEntry) => {
    return axios.post(baseUrl,newEntry).then(response => response.data)
}

const deleteEntry = (id) => {
    const url = `${baseUrl}/${id}`
    return axios.delete(url).then(response => response.data.id = id)
}

export default {getAll, createPhoneBookEntry, deleteEntry}