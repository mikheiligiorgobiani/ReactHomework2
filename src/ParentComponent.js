import React from 'react'
import ChildComponent from './ChildComponent'

const users = [
{name: "mishka",age: 21, id: 1},
{name: "giorgi",age: 22, id: 2},
{name: "sandro",age: 23, id: 3},
]
const ParentComponent = () => {
  return (
    <div>
        <ChildComponent users={users} isUserLoggedIn={true}/>
    </div>
  )
}

export default ParentComponent