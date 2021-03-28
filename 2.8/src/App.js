import React, {useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('') 
  const [ newNum, setNewNum ] = useState('')

  const addValue = (event) => {
    event.preventDefault()
    const Check = persons.filter((person) => person.name === newName)
    if (Check.length > 0) {
      alert(newName + ' is already added to Phonebook')
    }
    else {
    setPersons(persons.concat({name : newName , number : newNum}))}
  }

  const handleOnNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleOnNumChange = (event) => {
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addValue}>
        <div>
          name: <input value = {newName}  onChange = {handleOnNameChange}/>
          
          number: <input value = {newNum}  onChange = {handleOnNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, idx)  => <div key = {idx}>{person.name}  {person.number}</div>)}
    </div>
  )
}
  

export default App