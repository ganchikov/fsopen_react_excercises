import { useState } from 'react'
import Filter from './components/Filter'
import PhoneBookEntryForm from './components/PhoneBookEntryForm'
import PhoneBookEntryList from './components/PhoneBookEntryList'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [nextId, setNextId] = useState(5)

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
