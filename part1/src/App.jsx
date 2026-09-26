const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} - {part.units}</p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts[0].units + course.parts[1].units + course.parts[2].units
  return (
    <p>Number of units {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 Industry Elective 1',
    parts: [
      { name: 'CSIT321 Application Development', units: 3 },
      { name: 'CSIT327 Information Management 2', units: 3 },
      { name: 'IT365 Data Analytics', units: 3 }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App