const PhoneBookEntry = ({item}) => {
    return <>
      <li>
          {item.name} - {item.number}
      </li>
    </>
  }

  export default PhoneBookEntry