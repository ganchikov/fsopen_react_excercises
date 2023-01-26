import { useState, useEffect } from 'react'
import axios from 'axios'
import PhoneBookService from './services/PhoneBookService'
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
    PhoneBookService.createPhoneBookEntry({id: nextId, name: newName, number: newNumber}).then(data => {
      setPersons(persons.concat(data))
      setNextId(nextId+1)
    })
  }

  const onDelete = ({data}) => {
    if (window.confirm(`Delete entry ${data.name}?`)) {
      PhoneBookService.deleteEntry(data.id).then(response => {
        debugger
        const reducedPersons = persons.reduce((reduced, item) => {
          debugger
          if (item.id !== response) 
            return reduced.concat(item)
            else return reduced
        })

        setPersons(reducedPersons)
      }).catch(err => {
        debugger
        alert('No entry found!')
      })
    }

  }

  useEffect(() => {
    PhoneBookService.getAll().then(data => {
      setPersons(data)
      setNextId(data.length+1)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={captureFilterString}/>
      <h2>add a new</h2>
      <PhoneBookEntryForm onNameChange={captureName} onNumberChange={captureNumber} onClick={addNewEntry}/>
      <h2>Numbers</h2>
      <PhoneBookEntryList persons={persons} filterString={filterString} deleteEventHandler={onDelete}/>
    </div>
  );
}

export default App;
