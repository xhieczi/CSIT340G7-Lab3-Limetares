const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} - {props.units1}</p>
      <p>{props.part2} - {props.units2}</p>
      <p>{props.part3} - {props.units3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of units {props.units1 + props.units2 + props.units3}</p>
  )
}

const App = () => {
  const course = 'CSIT340 Industry Elective 1'
  const part1 = 'CSIT321 Application Development'
  const units1 = 3
  const part2 = 'CSIT327 Information Management 2'
  const units2 = 3
  const part3 = 'IT365 Data Analytics'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total units1={units1} units2={units2} units3={units3} />
    </div>
  )
}

export default App