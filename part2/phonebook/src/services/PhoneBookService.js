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


const updateEntry = (entry) => {
    const url = `${baseUrl}/${entry.id}`
    return axios.put(url, entry).then(response => response.data)
}
export default {getAll, createPhoneBookEntry, deleteEntry, updateEntry}