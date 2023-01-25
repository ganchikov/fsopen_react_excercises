import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PhoneBookEntryForm from './components/PhoneBookEntryForm'
import PhoneBookEntryList from './components/PhoneBookEntryList'

const App = () => {
  
  const [persons, setPersons] = useState([])

  const [nextId, setNextId] = useState(1)

  const [filterString, setNewFilterString] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const captureName = (event) => {
    setNewName(event.target.value)
  } 

  const captureNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const captureFilterString = (event) => {
    setNewFilterString(event.target.value)
  }

  const findByName = (name) => {
    return persons.find(item => item.name.includes(name))
  }

  const addNewEntry = (event) => {
    event.preventDefault()
    const element = findByName(newName)
    if (element) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({id: nextId, name: newName, number: newNumber}))
    setNextId(nextId+1)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setNextId(response.data.length+1)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={captureFilterString}/>
      <h2>add a new</h2>
      <PhoneBookEntryForm onNameChange={captureName} onNumberChange={captureNumber} onClick={addNewEntry}/>
      <h2>Numbers</h2>
      <PhoneBookEntryList persons={persons} filterString={filterString}/>
    </div>
  );
}

export default App;
