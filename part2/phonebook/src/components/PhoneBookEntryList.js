import PhoneBookEntry from './PhoneBookEntry'

const PhoneBookEntryList = ({persons, filterString}) => {
    return (
        <ul>
            {
          persons.filter(item => item.name.includes(filterString)).map(item => 
            <PhoneBookEntry key={item.id} item={item}></PhoneBookEntry>
          )
        }
        </ul>
    )
}

export default PhoneBookEntryList
