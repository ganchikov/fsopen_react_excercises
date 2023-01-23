const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }
  
  const Header = ({course}) => {
    return (<h1>{course}</h1>)
  }
  
  const Part = ({part, exercises}) => {
    return (
          <p>{part} = {exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
          <>
          {
            parts.map(part => 
              <Part key={part.id} part={part.name} exercises={part.exercises}/>
            )
          }
          </>
    )
  }
  
  const Total = ({parts}) => {
    let total = 0;
    total = parts.reduce((prev, cur) => {
        return {name: 'Total', exercises: prev.exercises+cur.exercises, id:0}
      }
    )
    // console.log(total)
    // debugger
    return (
      <h4>
        total of {total.exercises} excercises
      </h4>
    )
  }

export default Course