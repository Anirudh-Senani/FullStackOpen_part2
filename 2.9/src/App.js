import React, {useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('') 
  const [ newNum, setNewNum ] = useState('')
  const [filtVal, setfiltVal] = useState('')

  const addValue = (event) => {
    event.preventDefault()
    const Check = persons.filter((person) => person.name.toLowerCase() === newName.toLowerCase())
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

  const handleOnFiltChange = (event) => {
    setfiltVal(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with : <input value = {filtVal} onChange ={handleOnFiltChange}/>
      </div>
      <h2>Add a new</h2>
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
      {persons.map((person, idx)  => {
        if (filtVal === null) {
          return <div key = {idx}> {person.name}  {person.number} </div>
        }
        else {
        if (person.name.toLowerCase().includes(filtVal.toLowerCase())) {
          return <div key = {idx}> {person.name}  {person.number} </div>
         }
        else { return ''}
        }
       }
       )
      }
    </div>
  )
}

export default App