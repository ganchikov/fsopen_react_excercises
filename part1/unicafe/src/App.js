import { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return (
    <>
      <button onClick={clickHandler}>{text}</button>
    </>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>
        {text}:
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  if (!good && !neutral && !bad) {
    return (<>No feedback given</>)
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good}></StatisticsLine>
          <StatisticsLine text="Neutral" value={neutral}></StatisticsLine>
          <StatisticsLine text="Bad" value={bad}></StatisticsLine>
          <StatisticsLine text="All" value={all}></StatisticsLine>
          <StatisticsLine text="Average" value={(good*1+neutral*0+bad*(-1))/all}></StatisticsLine>
          <StatisticsLine text="Positive" value={good/all}></StatisticsLine>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => setGood(good+1)
  const setNeutralValue = () => setNeutral(neutral+1)
  const setBadValue = () => setBad(bad+1)
  

  return (
    <div>
      <h3>
        give feedback
      </h3>
      <Button clickHandler={setGoodValue} text="Good"></Button>
      <Button clickHandler={setNeutralValue} text="Neutral"></Button>
      <Button clickHandler={setBadValue} text="Bad"></Button>
      code here
      <h3>
        statistics
      </h3>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      
    </div>
  )
}

export default App;
