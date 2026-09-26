const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} - {props.part.units}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const total = props.course.parts[0].units + props.course.parts[1].units + props.course.parts[2].units
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