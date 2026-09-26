const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} - {props.units}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} units={props.units1} />
      <Part part={props.part2} units={props.units2} />
      <Part part={props.part3} units={props.units3} />
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