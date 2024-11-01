import Student from "./Student"

function App() {

  return (
    <>
      <Student name="Mehmet" age={30} isStudent={true} />
      <Student name="Ahmet" age={25} isStudent={true} />
      <Student name="İsmail" age={40} isStudent={true} />
      <Student name="Yusuf" age={35} isStudent={true} />
      <Student />
    </>
  )
}

export default App
