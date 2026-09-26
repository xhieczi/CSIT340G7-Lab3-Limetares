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
      {course.parts.map(part =>
        <Part key={part.name} part={part} />
      )}
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.units, 0)
  return (
    <p>Number of units {total}</p>
  )
}

const Footer = ({ name, code, section }) => {
  return (
    <footer>
      <p>{name} - {code} - {section}</p>
    </footer>
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

  const studentName = 'Jelian Limetares'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}

export default App