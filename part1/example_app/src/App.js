const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  const now = new Date();
  const name = 'Peter'
  const age = 10
  console.log('Hello from component')
  return (
  <>
    <h1>Greetings</h1>
    <Hello name='Maya' age={26+10}/>
    <Hello name={name} age={age}/>
  </>
  )  
}

export default App;
