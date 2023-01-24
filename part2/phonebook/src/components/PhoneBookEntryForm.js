const PhoneBookEntryForm = ({onNameChange, onNumberChange, onClick}) => {
    return (
        <form>
            <div>
            name: <input onChange={onNameChange}/>
            </div>
            <div>
            number: <input onChange={onNumberChange}/>
            </div>
            <div>
            <button type="submit" onClick={onClick}>add</button>
            </div>
      </form>
    )
}

export default PhoneBookEntryForm