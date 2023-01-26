import PhoneBookEntry from './PhoneBookEntry'

const PhoneBookEntryList = ({persons, filterString, deleteEventHandler}) => {
    return (
        <ul>
            {
          persons.filter(item => item.name.includes(filterString)).map(item => 
            <PhoneBookEntry key={item.id} item={item} deleteBtnClickHandler={deleteEventHandler} ></PhoneBookEntry>
          )
        }
        </ul>
    )
}

export default PhoneBookEntryList
