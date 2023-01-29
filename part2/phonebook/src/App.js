import { useState, useEffect } from 'react'
import PhoneBookService from './services/PhoneBookService'
import Filter from './components/Filter'
import PhoneBookEntryForm from './components/PhoneBookEntryForm'
import PhoneBookEntryList from './components/PhoneBookEntryList'
import NotificationMessage from './components/NotificationMessage'

const App = () => {
  
  const [persons, setPersons] = useState([])

  const [nextId, setNextId] = useState(1)

  const [filterString, setNewFilterString] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const captureName = (event) => {
    setNewName(event.target.value)
  } 

  const captureNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const captureFilterString = (event) => {
    setNewFilterString(event.target.value)
  }

  const getNextId = (data) => {
    let maxId = 0;
    data.forEach(item => item.id > maxId ? maxId = item.id : 0)
    return maxId+1
  }

  const findByName = (name) => {
    return persons.find(item => item.name.includes(name))
  }

  const showNotification = (message) => {
      setNotificationMessage(message)
      setTimeout(()=> {
        setNotificationMessage(null)
      }, 3000)
  }

  const showError = (message) => {
    setErrorMessage(message)
    setTimeout(()=> {
      setErrorMessage(null)
    }, 3000)
} 

  const addNewEntry = (event) => {
    event.preventDefault()
    const element = findByName(newName)
    if (element) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        PhoneBookService.updateEntry({id: element.id, name: element.name, number: newNumber}).then(data => {
          const newPersonsSet = persons.map(item => {
            if (item.id === element.id) item.number = newNumber
            return item
          })
          setPersons(newPersonsSet)
          showNotification(`Entry ${element.name} was updated`)
        }).catch(err => {
          showError(`Entry ${newName} is not existing!`)
        })
      }
      return
    }
    PhoneBookService.createPhoneBookEntry({id: nextId, name: newName, number: newNumber}).then(data => {
      const newPersonsSet = persons.concat(data)
      setPersons(newPersonsSet)
      setNextId(getNextId(newPersonsSet))
      showNotification(`Entry ${newName} was created`)
    })
  }

  const onDelete = ({data}) => {
    if (window.confirm(`Delete entry ${data.name}?`)) {
      PhoneBookService.deleteEntry(data.id).then(response => {
        const reducedPersons = []
        persons.forEach(item => {
          if (item.id !== data.id) {
            reducedPersons.push(item)
          }
        })
        setPersons(reducedPersons)
      }).catch(err => {
        showError(`Entry ${data.name} is not existing!`)
      })
    }

  }

  useEffect(() => {
    PhoneBookService.getAll().then(data => {
      setPersons(data)
      setNextId(getNextId(data))
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationMessage message={notificationMessage} />
      <NotificationMessage message={errorMessage} iserror={true}/>
      <Filter onChange={captureFilterString}/>
      <h2>add a new</h2>
      <PhoneBookEntryForm onNameChange={captureName} onNumberChange={captureNumber} onClick={addNewEntry}/>
      <h2>Numbers</h2>
      <PhoneBookEntryList persons={persons} filterString={filterString} deleteEventHandler={onDelete}/>
    </div>
  );
}

export default App;
