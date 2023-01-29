const NotificationMessage = ({message, iserror}) => {
    // debugger
    if (message === null || message === '') return null
    const style = {
        color: iserror ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default NotificationMessage