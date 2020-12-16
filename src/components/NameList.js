import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'clark', 'diana']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{{ nameList }}</div>

    // Array of persons 
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'clark',
            age: 41,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'diana',
            age: 26,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => 
        <Person key={person.id} person = {person}  />    )
    const nameList = names.map(
        (name, index) => <h2 key={index}>{index} {name}</h2>
        )
    return <div>{ personList}</div>



}

export default NameList
