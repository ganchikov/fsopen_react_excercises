import { useState } from 'react'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


const App = () => { 
  const anecdotes = 
    [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]
  

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([
    0,0,0,0,0,0,0,0
  ])

  const clickHandler= () => {
    
    setSelected(getRandomIntInclusive(0,anecdotes.length-1))
  }

  const voteHandler = () => { 
    const copyVotes = [...votes]
    copyVotes[selected] +=1 
    setVote(copyVotes)
  }

  const getMostVotedAnecdoteIndex = () => {
    let mostVotedIndex = 0
    let maxVote = 0
    votes.forEach((vote, index) => {
      if (vote>=maxVote) {
        maxVote = vote
        mostVotedIndex = index;
      }
    })
    return mostVotedIndex;
  }

  const mostVotedIndex = getMostVotedAnecdoteIndex()
  // debugger

  return (
    <div>      
      <h3>
        Anecdote of the day
      </h3>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes
      <button onClick={voteHandler}>vote</button>
      <button onClick={clickHandler}>next anecdote</button>      
      <h3>
        Anecdote with most votes 
      </h3>
      {anecdotes[mostVotedIndex]}
      <br/>
      has {votes[mostVotedIndex]} votes
    </div>
  )
}

export default App;
