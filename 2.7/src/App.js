import React, {useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addValue = (event) => {
    event.preventDefault()
    const Check = persons.filter((person) => person.name === newName)
    if (Check.length > 0) {
      alert(newName + ' is already added to Phonebook')
    }
    else {
    setPersons(persons.concat({name : newName}))}
  }

  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addValue}>
        <div>
          name: <input value = {newName}  onChange = {handleOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, idx)  => <div key = {idx}>{person.name}</div>)}
    </div>
  )
}
  

export default App