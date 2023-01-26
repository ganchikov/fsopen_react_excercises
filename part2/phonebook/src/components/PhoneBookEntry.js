const PhoneBookEntry = ({item, deleteBtnClickHandler}) => {
    const clickHandler = (event) => {
      event.data = item
      deleteBtnClickHandler(event)
    }

    return <>
      <li>
          {item.name} - {item.number} <button key={item.id} onClick={clickHandler} >Delete</button> 
      </li>
    </>
}

export default PhoneBookEntry